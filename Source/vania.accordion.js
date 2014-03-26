/* Developed By Mehdi Rizvandi
* Ver 1.0 13921218 [2014/03/20]
* Ver 1.1 13930102 [2014/03/22]
* Add option: slideCloseDuration, slideOpenDuration, closeOther
*/

/* template rules: 
    first row is header and must be span
    accordion row is a header element like h1, h2, h3, ...
    accordion content is a div and can contain anything
    <div class="va-accordion">
        <span>Accordion Header</span>
        <h1>First Row</h1>
        <div>Container and can contain any think</div>
        <h1>Second Row<h1>
        <div>Container and can contain any think</div>
        ...
    </div>
*/

function accordion(options) {
    var defultOptions = { slideCloseDuration: 500, slideOpenDuration: 500, closeOther: true };
    options = $.extend({}, defultOptions, options);

    $(".va-accordion>:header").click(function () {
        $(".va-accordion>div").each(function () {
            if ($(this).is(":visible") && options.closeOther)
                $(this).slideUp(options.slideCloseDuration);
        })
        if (!($(this).next().is(":visible")))
            $(this).next().slideDown(options.slideOpenDuration);
            else if(!options.closeOther)
                $(this).next().slideUp(options.slideOpenDuration);
    })
}