Vania.Accordion
=========

The Small and Simple Accordion

# Welcome

sometime you may need a simple and small accordion. you don't want to add big script to your project and create the hell of unused code!
you don't need callback function, events, cache and so on...

yes you find the smallest accordion. the min size of jquery script is 413 bytes!
Thank you to choose this simple and small accordion.

Use this accordion is too easy, just make the template and call the accordion function.

## HTML markup code: (this is a template)
    <div class="va-accordion">
        <span>Accordion Main Header</span>
        <h2>Section Header 1</h2>
        <div class="va-accordion-open">
            Content (include any HTML markup)
            <br />
            Hello world!
        </div>
        <h2>Section Header 2</h2>
        <div class="va-accordion-close">
            Content (include any HTML markup)
            <br />
            Hello world!
        </div>
        <h2>Section Header 3</h2>
        <div class="va-accordion-close">
            Content (include any HTML markup)
            <br />
            Hello world!
        </div>
    </div>

### Rules:
* Accordion main header must be simple span.
* Section header must be one of header element (h1, h2, h3, ...)
* Section content must be div element

## CSS and Style:
Use css to make a better view.
CSS class used:

**.va-accordion>span**

Make style for Accordion Header



**.va-accordion>h1, .va-accordion>h2, .va-accordion>h3**

Apply style for Section Header



**.va-accordion>h1::before, .va-accordion>h2::before, .va-accordion>h3::before**

Add some character icon before the Section Header (like triangle or something like that)



**.va-accordion>h1:hover, .va-accordion>h2:hover, .va-accordion>h3:hover**

Make hover effect for Section Header



**.va-accordion>div**

General style for Section Content



**.va-accordion-open**

**.va-accordion-close**

Simple way to Show and Hide the Section Content on initializing.



## Script:
ok, everything we need are ready, add the script to your page and call the accordion function like this:
(you need add the jquery also)

    <script src="Media/Script/jquery-1.9.1.min.js" type="text/javascript"></script>
    <script src="Media/Script/vania.accordion.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            accordion();
        });
    </script>

## Options:
**slideOpenDuration:** Animation timing of slide opening. Default value is: [500]

Use different value to make some effect.


**slideCloseDuration:** Animation timing of slide closing. Default value is: [500]

Use different value to make some effect.


**closeOther:** Only one content show or more, when user click on headers. Default value is: [true]

Limit user to show only one panel content with closeOther: true, and if you want user enable to open some panels at same time, set closeOther: false



**Congratulation process done!**

Be happy, Be Lucky.
