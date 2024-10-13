---
sidebar_position: 2
---

# Configuration

Deer Lister can be configured by changing the `_internal/config.yaml` file.

## Protecting folders

To protect a folder from being indexed, add it to the `forbidden` option.

```yaml
forbidden:
  - vendor
  - mysecretfolder
```

## Hiding folders

To hide a folder but still allow it to be indexed, add it to the `hidden` option.

```yaml
hidden:
  - myhiddenfolder
```

## Previews

File previews allow previewing the contents of a file, enabled previews are under the `enabled_previews` option.

```yaml
enabled_previews:
  - image
  - video
```

Some previews have additional configuration, you will find these under the `previews` option.

```yaml
previews:
  code:
    unsafe: false
```

## Displays

Displays allow the content of a folder to be displayed differently, for example an image gallery. Displays need to be configured under the `displays` option.

```yaml
displays:
  "path/to/gallery":
    format: image
    displayOthers: false
    displayBack: false
```