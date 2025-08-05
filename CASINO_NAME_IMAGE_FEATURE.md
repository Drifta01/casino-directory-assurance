# Casino Name Image Feature

## Overview

The CasinoCard component now supports custom logo images for casino names instead of plain text. This allows for branded casino logos to be displayed.

## How to Use

### 1. Add the nameImage property to your casino data:

```typescript
const casinoData: Casino = {
  id: "casino-id",
  name: "Casino Name", // Fallback text if image fails
  nameImage: "/path-to-your-casino-logo.png", // Custom casino name logo
  logo: "/casino-icon.jpg", // Small icon logo (existing)
  // ... other properties
};
```

### 2. Image Requirements:

- **Format**: PNG (recommended for transparency) or JPG
- **Dimensions**: 200px width x 32px height (or maintain similar aspect ratio)
- **Background**: Transparent PNG works best for dark themes
- **Location**: Place image files in the `/public` folder

### 3. Fallback Behavior:

- If `nameImage` is not provided → displays text name
- If `nameImage` fails to load → automatically falls back to text name
- The `name` property is always required as fallback text

### 4. Examples:

#### Text-only casino name:

```typescript
{
  name: "Casino Name",
  // nameImage not provided - will show text
}
```

#### Custom logo casino name:

```typescript
{
  name: "Casino Name", // Fallback if image fails
  nameImage: "/casino-name-logo.png", // Custom logo
}
```

## File Structure:

```
public/
  casino-name-logo.png     ← Your custom casino name image
  casino-icon.jpg          ← Small icon (existing logo property)
```
