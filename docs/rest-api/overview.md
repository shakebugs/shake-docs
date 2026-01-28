---
id: overview
title: Overview
---

## Shake REST API

> The Shake REST API provides programmatic access to your Shake data, allowing you to manage crash reports, issues, and team members.

## Base URL

```text
https://dashboard-api.shakebugs.com/api/rest
```

## Authentication

All API requests require authentication using an API key. You can find your API key in your Shake dashboard.

Include your API key in the request header:

```text
X-API-KEY: your_api_key_here
```

### Example Request

```bash
curl -H "X-API-KEY: your_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_groups
```

## Rate Limits

The API enforces rate limiting to ensure fair usage and system stability.

**Limit**: 200 requests per hour

### Rate Limit Headers

Every API response includes headers that indicate your current rate limit status:

| Header | Description | Example |
|--------|-------------|---------|
| `x-ratelimit-limit` | Maximum number of requests allowed per hour | `200` |
| `x-ratelimit-remaining` | Number of requests remaining in the current window | `199` |
| `x-ratelimit-reset` | Unix timestamp when the rate limit window resets | `1767826558` |

### Example Response Headers

```text
x-ratelimit-limit: 200
x-ratelimit-remaining: 199
x-ratelimit-reset: 1767826558
```

### Handling Rate Limits

When you exceed the rate limit, the API returns a `429 Too Many Requests` status code. Your application should:

1. Monitor the `x-ratelimit-remaining` header
2. When approaching the limit, implement exponential backoff
3. Use the `x-ratelimit-reset` timestamp to know when to retry

```javascript
// Example: Check rate limit before making requests
const response = await fetch('https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_groups', {
  headers: {
    'X-API-KEY': 'your_api_key_here'
  }
});

const remaining = response.headers.get('x-ratelimit-remaining');
const resetTime = response.headers.get('x-ratelimit-reset');

if (remaining < 10) {
  console.warn(`Only ${remaining} requests remaining until ${new Date(resetTime * 1000)}`);
}
```

## API Features

The Shake REST API provides three main categories of endpoints:

### Accounts

Manage team members and access control for your organization.

### Crash Reporting

Access and manage crash reports, crash groups, and related data including:

- Crash groups and crash events
- Chat conversations
- Activity logs

### Issue Tracking

Track and manage user-reported issues including:

- Issue management and lifecycle
- Chat conversations with users
- Activity logs and history

## Request Format

The API accepts JSON-formatted request bodies for POST and PATCH requests.

```text
Content-Type: application/json
```

## Response Format

All responses are returned in JSON format:

```text
Content-Type: application/json
```

## Pagination

List endpoints support pagination using `limit` and `offset` query parameters:

| Parameter | Type | Default | Range | Description |
|-----------|------|---------|-------|-------------|
| `limit` | integer | 20 | 1-100 | Number of items to return |
| `offset` | integer | 0 | 0+ | Number of items to skip |

### Example

```bash
# Get the first 50 crash groups
curl -H "X-API-KEY: your_api_key_here" \
  "https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_groups?limit=50&offset=0"

# Get the next 50 crash groups
curl -H "X-API-KEY: your_api_key_here" \
  "https://dashboard-api.shakebugs.com/api/rest/crash_reporting/crash_groups?limit=50&offset=50"
```

## HTTP Methods

The API uses standard HTTP methods:

| Method | Description |
|--------|-------------|
| `GET` | Retrieve resources |
| `POST` | Create new resources |
| `PATCH` | Update existing resources (JSON Patch format) |
| `DELETE` | Delete resources |
| `OPTIONS` | Check allowed methods for an endpoint |

## Error Responses

The API uses standard HTTP status codes:

| Status Code | Description |
|-------------|-------------|
| `200` | Success |
| `204` | Success with no content |
| `404` | Resource not found |
| `422` | Unprocessable entity (validation error) |
| `429` | Too many requests (rate limit exceeded) |

### Error Response Format

```json
{
  "status": 404,
  "message": "Resource not found"
}
```

## API Reference

Want to dive deeper into the API specifications? We've got you covered!

### OpenAPI Specification

The complete OpenAPI (Swagger) specification is available at:

```text
https://dashboard-api.shakebugs.com/api/rest/swagger.json
```

This JSON file contains the full technical specification of all endpoints, request/response schemas, and parameters.

### Try It Out

You can test API endpoints and explore the interactive documentation at:

```text
https://dashboard-api.shakebugs.com/api/rest/
```

Feel free to experiment there!

## Next Steps

Explore the API through our docs:

- [Accounts](/docs/rest-api/modules/accounts)
- [Crash Reporting](/docs/rest-api/modules/crash-reporting)
- [Issue Tracking](/docs/rest-api/modules/issue-tracking)

## Feedback

If you'd like to see additional endpoints or features in the Rest API, please let us know at [feedback.shakebugs.com](https://feedback.shakebugs.com).
