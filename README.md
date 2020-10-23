# Chatter

A chat application <usp incoming>

## Design Considerations and decisions

## Data Structure

Following is the structure for a user document

```js
{
  id: string; // "id for a user",
  number: number; // "user's number",
  name: string; // "user's name"
}
```

Following is the structure for a message

```js
{
  id: string; // "id for a message",
  message: (string | blob); // "message body",
  type: ENUM<"TEXT">; // "the type of a message"
}
```
