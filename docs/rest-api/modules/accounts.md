---
id: accounts
title: Accounts
---

# Accounts

Manage team members and access control for your organization.

## Get Team Members

Retrieve a list of all team members in your organization.

```http
GET /accounts/members
```

### Authentication

Required. Use your API key in the `X-API-KEY` header.

### Response

Returns an array of team member objects.

#### Response Schema

```json
[
  {
    "id": "uuid",
    "user": {
      "id": "uuid",
      "email": "string",
      "name": "string",
      "picture": "string"
    },
    "role": "string"
  }
]
```

### Example Request

```bash
curl -H "X-API-KEY: your_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/accounts/members
```

### Example Response

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "user": {
      "id": "660e8400-e29b-41d4-a716-446655440000",
      "email": "john.doe@example.com",
      "name": "John Doe",
      "picture": "https://example.com/avatar.jpg"
    },
    "role": "admin"
  },
  {
    "id": "770e8400-e29b-41d4-a716-446655440000",
    "user": {
      "id": "880e8400-e29b-41d4-a716-446655440000",
      "email": "jane.smith@example.com",
      "name": "Jane Smith",
      "picture": "https://example.com/avatar2.jpg"
    },
    "role": "member"
  }
]
```

## Check Allowed Methods

Check which HTTP methods are allowed for the team members endpoint.

```http
OPTIONS /accounts/members
```

### Response

Returns a `204 No Content` status with an `Allow` header indicating permitted methods.

### Example Request

```bash
curl -X OPTIONS -H "X-API-KEY: your_api_key_here" \
  https://dashboard-api.shakebugs.com/api/rest/accounts/members
```

### Response Headers

```text
Allow: GET, OPTIONS
```
