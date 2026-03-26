---
id: crash-reporting
title: Crash Reporting
---

# Crash Reporting

Access and manage crash reports, crash groups, and related data.

## Crash Groups

### List Crash Groups

Get a paginated list of crash groups for your application.

```http
GET /crash_reporting/crash_groups
```

#### Query Parameters

| Parameter | Type | Required | Default | Range | Description |
|-----------|------|----------|---------|-------|-------------|
| `limit` | integer | No | 20 | 1-100 | Number of items to return |
| `offset` | integer | No | 0 | 0+ | Number of items to skip |

#### Response

```json
{
  "total": 150,
  "items": [
    {
      "id": "uuid",
      "key": 1,
      "app_id": "uuid",
      "created": "2024-01-01T00:00:00Z",
      "updated": "2024-01-01T00:00:00Z",
      "active": true,
      "report_type": "crash",
      "exception_type": "NullPointerException",
      "title": "Crash in MainActivity",
      "subtitle": "at com.example.MainActivity.onCreate",
      "status": {
        "status": "New"
      },
      "priority": {
        "priority": "High"
      },
      "assignee": {
        "assignee_id": "uuid"
      },
      "tags": ["android"],
      "crash_events_count": 42,
      "last_event": "uuid"
    }
  ]
}
```

#### Example Request

```bash
curl -H "X-API-KEY: your_rest_api_key_here" \
  "https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_groups?limit=20&offset=0"
```

### Get Crash Group Details

Get detailed information about a specific crash group.

```http
GET /crash_reporting/crash_groups/{crash_group_id}
```

#### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `crash_group_id` | string | Yes | Unique identifier of the crash group |

#### Example Request

```bash
curl -H "X-API-KEY: your_rest_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_groups/550e8400-e29b-41d4-a716-446655440000
```

### Update Crash Group

Update crash group properties using JSON Patch format.

```http
PATCH /crash_reporting/crash_groups/{crash_group_id}
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
    "value": "high"
  },
  {
    "op": "replace",
    "path": "/assignee_id",
    "value": "550e8400-e29b-41d4-a716-446655440000"
  }
]
```

#### Allowed Patch Paths

- `/active` - Boolean
- `/status` - String: "New", "In progress", "Closed", or "Locked"
- `/priority` - Priority value: "Low", "Medium", or "High"
- `/assignee_id` - UUID of team member
- `/tags` - Array of tag strings

#### Example Request

```bash
curl -X PATCH \
  -H "X-API-KEY: your_rest_api_key_here" \
  -H "Content-Type: application/json" \
  -d '[{"op":"replace","path":"/status","value":"In progress"}]' \
  https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_groups/550e8400-e29b-41d4-a716-446655440000
```

### Delete Crash Group

Delete a crash group and all its crash events.

```http
DELETE /crash_reporting/crash_groups/{crash_group_id}
```

#### Example Request

```bash
curl -X DELETE \
  -H "X-API-KEY: your_rest_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_groups/550e8400-e29b-41d4-a716-446655440000
```

## Crash Events

### List Crash Events for a Group

Get a paginated list of crash events for a specific crash group.

```http
GET /crash_reporting/crash_groups/{crash_group_id}/crash_events
```

#### Query Parameters

| Parameter | Type | Required | Default | Range | Description |
|-----------|------|----------|---------|-------|-------------|
| `limit` | integer | No | 20 | 1-100 | Number of items to return |
| `offset` | integer | No | 0 | 0+ | Number of items to skip |

#### Example Request

```bash
curl -H "X-API-KEY: your_rest_api_key_here" \
  "https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_groups/550e8400-e29b-41d4-a716-446655440000/crash_events?limit=20"
```

### Get Crash Event Details

Get detailed information about a specific crash event.

```http
GET /crash_reporting/crash_events/{crash_event_id}
```

#### Response

Returns detailed crash event information including device info, stack trace, and custom fields.

```json
{
  "id": "uuid",
  "title": "NullPointerException in MainActivity",
  "app_version": "1.2.3",
  "build_version": "123",
  "device": "Samsung Galaxy S21",
  "os_name": "Android",
  "os_version": "12",
  "issue_reported_time": "2024-01-01T12:00:00Z",
  "screenshot_url": "https://...",
  "video_url": "https://...",
  "files": [
    {
      "id": "uuid",
      "url": "https://...",
      "filename": "crash_log.txt"
    }
  ],
  "custom_fields": [
    {
      "type": "string",
      "label": "User ID",
      "value": "12345"
    }
  ],
  "app_user": {
    "id": "uuid",
    "end_user_id": "user@example.com"
  }
}
```

#### Example Request

```bash
curl -H "X-API-KEY: your_rest_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_events/660e8400-e29b-41d4-a716-446655440000
```

### Update Crash Event

Update crash event properties using JSON Patch format.

```http
PATCH /crash_reporting/crash_events/{crash_event_id}
```

#### Request Body

```json
[
  {
    "op": "replace",
    "path": "/title",
    "value": "Updated crash title"
  }
]
```

#### Allowed Patch Paths

- `/title` - String

#### Example Request

```bash
curl -X PATCH \
  -H "X-API-KEY: your_rest_api_key_here" \
  -H "Content-Type: application/json" \
  -d '[{"op":"replace","path":"/title","value":"Updated crash title"}]' \
  https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_events/660e8400-e29b-41d4-a716-446655440000
```

## Crash Event Chat

### Get Chat Messages

Get chat conversation for a crash event.

```http
GET /crash_reporting/crash_events/{crash_event_id}/chat
```

#### Response

```json
{
  "chat": [
    {
      "id": "uuid",
      "message": "Looking into this crash",
      "is_note": false,
      "is_read": true,
      "created": "2024-01-01T12:00:00Z",
      "updated": "2024-01-01T12:00:00Z"
    }
  ],
  "activity": [
    {
      "id": "uuid",
      "activity_type": "status_change",
      "activity_description": "Status changed to In Progress",
      "created": "2024-01-01T12:00:00Z"
    }
  ]
}
```

### Add Chat Message

Add a new message to the crash event chat.

```http
POST /crash_reporting/crash_events/{crash_event_id}/chat
```

#### Request Body

```json
{
  "message": "This crash is fixed in version 1.2.4",
  "assignee_id": "550e8400-e29b-41d4-a716-446655440000",
  "is_note": false
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `message` | string | Yes | Chat message content |
| `assignee_id` | string (uuid) | Yes | Team member ID |
| `is_note` | boolean | No | Internal note or send to user |

#### Example Request

```bash
curl -X POST \
  -H "X-API-KEY: your_rest_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{"message":"Investigating this issue","assignee_id":"550e8400-e29b-41d4-a716-446655440000","is_note":false}' \
  https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_events/660e8400-e29b-41d4-a716-446655440000/chat
```

## Crash Event Logs

### Get Activity Logs

Get activity logs for a crash event including user actions, network requests, and system events.

```http
GET /crash_reporting/crash_events/{crash_event_id}/logs
```

#### Response

```json
{
  "id": "uuid",
  "user_actions": [...],
  "network_requests": [...],
  "system_events": [...],
  "view_controller_history": [...],
  "notification_events": [...],
  "custom_log_events": [...],
  "console_log_events": [...],
  "created": "2024-01-01T12:00:00Z",
  "updated": "2024-01-01T12:00:00Z"
}
```

#### Example Request

```bash
curl -H "X-API-KEY: your_rest_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_events/660e8400-e29b-41d4-a716-446655440000/logs
```
