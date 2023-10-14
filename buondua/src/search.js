load('config.js');
function execute(key, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL, {
        method: "GET",
        queries: {
            q : key
        }
    });
    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select(".item-thumb").forEach(e => {
            data.push({
                name: e.select(".a").text(),
                link: e.select(".popunder").first().attr("href"),
                cover: e.select(".img.loading").attr("src"),
                host: BASE_URL
            });
        });

        return Response.success(data);
    }
    return null;
}