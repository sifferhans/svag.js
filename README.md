# Svag.js
Are you tired of copying/pasting SVG code into your projects? I certainly am, which is why I created [Svag.js](https://github.com/sifferhans/svag.js)

## Getting Started

First, add the script into the bottom of the body in your HTML document.
```
<script src="your/path/to/svag.min.js"></script>
```
or
```
<script src="your/path/to/svag.js"></script>
```

And now, you are ready to go.

## But, how?

To load your beautiful SVG into the document, you need to add a custom element.
This element is called ```<svag />```

But it doesn't render your SVG with just that; You will need a source.
Simply, give the ```<svag />``` element a ```src``` attribute.
Here's an example:
```
<svag src="path/to/myFile.svg" />
```
Your file is now being loaded into the HTML body as an inline element.
Kinda cool, eh?

## Information

The SVG files are being loaded through a [XMLHttpRequest](https://en.wikipedia.org/wiki/XMLHttpRequest), which means the HTML document needs to be running on a server.
For local testing/developing, try the npm-package [http-server](https://www.npmjs.com/package/http-server)

## Built With

* JavaScript

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sifferhans/svag.js/tags).

## Authors

* **Sigve Hansen** - *Initial work* - [sifferhans](https://github.com/sifferhans)

See also the list of [contributors](https://github.com/sifferhans/svag.js/contributors) who participated in this project.

## License

This project is licensed under the MIT License 

## Acknowledgments

* The original idea was made by my good friend [Carsten Jacobsen](https://github.com/crsten)
