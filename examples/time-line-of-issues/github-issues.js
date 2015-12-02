// My API (GET https://api.github.com/repos/fh-potsdam/steel-ant-input-output/issues)

jQuery.ajax({
    url: "https://api.github.com/repos/fh-potsdam/steel-ant-input-output/issues",
    type: "GET",
    data: {
        "per_page": "100",
        "page": "2",
        "state": "all",
    },
})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
})
.always(function() {
    /* ... */
});
