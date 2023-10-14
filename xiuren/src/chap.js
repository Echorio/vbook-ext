function execute(url) {
    let response = fetch(url + "/");

    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select("div.content-inner > p > a > img").forEach(e => {
            data.push(e.attr("src"));
        });

        return Response.success(data);
    }

    return null;
}