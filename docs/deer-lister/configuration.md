---
sidebar_position: 2
---

# Configuration

Deer Lister can be configured by changing the `_internal/config.toml` file.

## Protecting folders

To protect a folder from being indexed and prevent the user to access it, add it to the `forbidden` option.

```toml
forbidden = [ "vendor", "mysecretfolder" ]
```

## Hiding folders

To hide a folder but still allow it to be indexed, add it to the `hidden` option.

```toml
hidden = [ "myhiddenfolder" ]
```

## Preview fallback

If true, clicking a file that can't be previewed will display a message saying so instead of downloading it

```toml
preview_fallback = true
```

## Enabled README

Do we preview the README if one is present

```toml
enabled_readme = true
```

## Previews

![Preview feature example](/img/deer-lister/preview.png)

File previews show a preview of a file in a modal when the user click on it in DeerLister, enabled previews are under the `enabled_previews` option.

```toml
[previews]
enabled = [ "image", "video" ]
```

The full list of possible previews are the following: image, video, code, audio, markdown, pdf

Some previews have additional configuration, you will find these under the `previews` option.

```toml
[previews.code]
unsafe = false
```

## Displays

![Display feature example](/img/deer-lister/display.png)

Displays allow the content of a folder to be displayed differently, for example an image gallery. Displays need to be configured under the `displays` option.

```toml
[[displays]]
path = "path/to/gallery"
format = "image"
displayOthers = false
displayBack = false
```

Possible formats values are the following: file (default), image, audio

For example the following config

```toml
[[displays]]
path = "media/myMusic"
format = "music"


[[displays]]
path = "media/myPhotos"
format = "music"
displayOthers = true
```

Will display give the following:

```
Root
├─── media
│   ├─── myMusic  <── These files will be displayed in "audio" format
│   ├─── myPhotos <── These files will be displayed in "image" format, but still showing the "back" button
│   ├─── myDocs   <── These files will be displayed in "file" format
```