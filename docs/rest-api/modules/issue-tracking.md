---
id: issue-tracking
title: Issue Tracking
---

# Issue Tracking

Track and manage user-reported issues including bug reports, feature requests, and feedback.

## Issues

### List Issues

Get a paginated list of issues for your application.

```http
GET /issue_tracking/issues
```

#### Query Parameters

| Parameter | Type | Required | Default | Range | Description |
|-----------|------|----------|---------|-------|-------------|
| `limit` | integer | No | 20 | 1-100 | Number of items to return |
| `offset` | integer | No | 0 | 0+ | Number of items to skip |

#### Response

```json
{
  "total": 245,
  "current_month_issues": 18,
  "items": [
    {
      "id": "uuid",
      "key": 1,
      "app_id": "uuid",
      "title": "Login button not working",
      "app_version": "2.1.0",
      "issue_reported_time": "2024-01-01T10:30:00Z",
      "created": "2024-01-01T10:30:00Z",
      "updated": "2024-01-02T14:20:00Z",
      "status": {
        "status": "New",
        "updated": "2024-01-01T10:30:00Z"
      },
      "priority": {
        "priority": "High",
        "updated": "2024-01-01T10:30:00Z"
      },
      "assignee": {
        "assignee_id": "uuid",
        "name": "John Doe",
        "email": "john@example.com",
        "updated": "2024-01-01T11:00:00Z"
      },
      "tags": ["bug", "ui"],
      "screenshot_url": "https://...",
      "video_url": "https://...",
      "app_user": {
        "id": "uuid",
        "end_user_id": "user@example.com"
      },
      "custom_fields": [
        {
          "type": "string",
          "label": "Device Type",
          "value": "Mobile"
        }
      ],
      "files": [
        {
          "id": "uuid",
          "url": "https://...",
          "filename": "screenshot.png"
        }
      ]
    }
  ]
}
```

#### Example Request

```bash
curl -H "X-API-KEY: your_api_key_here" \
  "https://dashboard-api.shakebugs.com/api/rest/issue_tracking/issues?limit=20&offset=0"
```

### Get Issue Details

Get detailed information about a specific issue.

```http
GET /issue_tracking/issues/{issue_id}
```

#### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id` | string | Yes | Unique identifier of the issue |

#### Response

Returns comprehensive issue details including device information, environment data, permissions, and user context.

```json
{
  "id": "uuid",
  "key": 42,
  "app_id": "uuid",
  "title": "Login button not working",
  "issue_reported_time": "2024-01-01T10:30:00Z",
  "device": "iPhone 13 Pro",
  "os_name": "iOS",
  "os_version": "16.0",
  "app_version": "2.1.0",
  "build_version": "210",
  "sdk_version": "15.1.0",
  "locale": "en_US",
  "timezone": "America/New_York",
  "battery_level": 0.75,
  "battery_status": 2,
  "available_memory": 4096000000,
  "used_memory": 2048000000,
  "network_type": "wifi",
  "screenshot_url": "https://...",
  "video_url": "https://...",
  "session_replay_url": "https://...",
  "public_url": "https://...",
  "permalink": "https://...",
  "status": {
    "status": "New",
    "updated": "2024-01-01T10:30:00Z"
  },
  "priority": {
    "priority": "high",
    "updated": "2024-01-01T10:30:00Z"
  },
  "assignee": {
    "assignee_id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "updated": "2024-01-01T11:00:00Z"
  },
  "tags": ["bug"],
  "permissions": [
    {
      "id": "uuid",
      "name": "camera",
      "state": "granted",
      "created": "2024-01-01T10:30:00Z"
    }
  ],
  "app_user": {
    "id": "uuid",
    "end_user_id": "user@example.com",
    "metadata_": {},
    "banned": false,
    "city": "New York",
    "country": "United States"
  },
  "custom_fields": [
    {
      "type": "string",
      "label": "User Role",
      "value": "Premium"
    }
  ]
}
```

#### Example Request

```bash
curl -H "X-API-KEY: your_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/issue_tracking/issues/550e8400-e29b-41d4-a716-446655440000
```

### Update Issue

Update issue properties using JSON Patch format.

```http
PATCH /issue_tracking/issues/{issue_id}
```

#### Request Body

Use JSON Patch operations to update specific fields:

```json
[
  {
    "op": "replace",
    "path": "/status",
    "value": "In progress"
  },
  {
    "op": "replace",
    "path": "/priority",
    "value": "High"
  },
  {
    "op": "replace",
    "path": "/assignee_id",
    "value": "550e8400-e29b-41d4-a716-446655440000"
  },
  {
    "op": "replace",
    "path": "/title",
    "value": "Updated issue title"
  }
]
```

#### Allowed Patch Paths

- `/title` - String
- `/active` - Boolean
- `/status` - String: "New", "In progress", or "Closed"
- `/priority` - Priority value: "Low", "Medium", or "High"
- `/assignee_id` - UUID of team member
- `/tags` - Array of tag strings

#### Example Request

```bash
curl -X PATCH \
  -H "X-API-KEY: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '[{"op":"replace","path":"/status","value":"In progress"},{"op":"replace","path":"/assignee_id","value":"550e8400-e29b-41d4-a716-446655440000"}]' \
  https://dashboard-api.shakebugs.com/api/rest/issue_tracking/issues/550e8400-e29b-41d4-a716-446655440000
```

### Delete Issue

Delete an issue by ID.

```http
DELETE /issue_tracking/issues/{issue_id}
```

#### Response

Returns `204 No Content` on success.

#### Example Request

```bash
curl -X DELETE \
  -H "X-API-KEY: your_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/issue_tracking/issues/550e8400-e29b-41d4-a716-446655440000
```

## Issue Chat

### Get Chat Messages

Get chat conversation for an issue.

```http
GET /issue_tracking/issues/{issue_id}/chat
```

#### Response

```json
{
  "chat": [
    {
      "id": "uuid",
      "message": "Thanks for reporting this! We're looking into it.",
      "is_note": false,
      "is_read": true,
      "created": "2024-01-01T12:00:00Z",
      "updated": "2024-01-01T12:00:00Z",
      "edited_at": null
    },
    {
      "id": "uuid",
      "message": "Internal note: This is a known issue in v2.1.0",
      "is_note": true,
      "is_read": true,
      "created": "2024-01-01T12:05:00Z",
      "updated": "2024-01-01T12:05:00Z",
      "edited_at": null
    }
  ],
  "activity": [
    {
      "id": "uuid",
      "activity_type": "status_change",
      "activity_description": "Status changed from New to In Progress",
      "activity_url": null,
      "created": "2024-01-01T12:10:00Z",
      "updated": "2024-01-01T12:10:00Z"
    }
  ]
}
```

#### Example Request

```bash
curl -H "X-API-KEY: your_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/issue_tracking/issues/550e8400-e29b-41d4-a716-446655440000/chat
```

### Add Chat Message

Add a new message to the issue chat.

```http
POST /issue_tracking/issues/{issue_id}/chat
```

#### Request Body

```json
{
  "message": "This issue has been fixed and will be included in the next release.",
  "assignee_id": "550e8400-e29b-41d4-a716-446655440000",
  "is_note": false
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `message` | string | Yes | Chat message content |
| `assignee_id` | string (uuid) | Yes | Team member ID |
| `is_note` | boolean | No | If true, message is internal and not sent to user |

#### Response

Returns the updated chat and activity data.

#### Example Request

```bash
curl -X POST \
  -H "X-API-KEY: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{"message":"We have identified the issue and are working on a fix.","assignee_id":"550e8400-e29b-41d4-a716-446655440000","is_note":false}' \
  https://dashboard-api.shakebugs.com/api/rest/issue_tracking/issues/550e8400-e29b-41d4-a716-446655440000/chat
```

## Issue Activity Logs

### Get Activity Logs

Get activity logs for an issue including user actions, network requests, system events, and custom logs.

```http
GET /issue_tracking/issues/{issue_id}/logs
```

#### Response

```json
{
  "id": "uuid",
  "user_actions": [
    {
      "timestamp": "2024-01-01T10:29:45Z",
      "action": "button_tap",
      "element": "login_button"
    }
  ],
  "network_requests": [
    {
      "timestamp": "2024-01-01T10:29:50Z",
      "method": "POST",
      "url": "https://api.example.com/login",
      "status_code": 500,
      "response_time": 1234
    }
  ],
  "system_events": [
    {
      "timestamp": "2024-01-01T10:29:55Z",
      "event": "memory_warning",
      "details": "Low memory warning received"
    }
  ],
  "view_controller_history": [
    {
      "timestamp": "2024-01-01T10:29:00Z",
      "view": "LoginViewController"
    }
  ],
  "notification_events": [
    {
      "timestamp": "2024-01-01T10:28:00Z",
      "notification": "push_notification_received",
      "title": "New message"
    }
  ],
  "custom_log_events": [
    {
      "timestamp": "2024-01-01T10:29:30Z",
      "level": "error",
      "message": "Failed to authenticate user"
    }
  ],
  "console_log_events": [
    {
      "timestamp": "2024-01-01T10:29:35Z",
      "level": "error",
      "message": "Network request failed: timeout"
    }
  ],
  "created": "2024-01-01T10:30:00Z",
  "updated": "2024-01-01T10:30:00Z"
}
```

#### Example Request

```bash
curl -H "X-API-KEY: your_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/issue_tracking/issues/550e8400-e29b-41d4-a716-446655440000/logs
```

## Common Fields

### Status Values

Issues can have the following status values:

- `New` - Issue has been reported but not yet addressed
- `In progress` - Team is actively working on the issue
- `Closed` - Issue has been resolved or dismissed

### Priority Values

Issues can have the following priority values:
- `Low` - Low priority issue
- `Medium` - Medium priority issue
- `High` - High priority issue

### Tags

Tags are flexible labels that can be used to categorize and filter issues. Tags are provided as an array of strings.

Example:
```json
["bug", "ui", "high-priority"]
```

### Custom Fields

Issues support custom fields for additional metadata:

```json
{
  "type": "string",
  "label": "Field Name",
  "value": "Field Value"
}
```
