function execute() {
    return Response.success([
        {title: "Hot", input: "https://buondua.com/hot/", script: "gen.js"},
        {title: "Coser", input: "buondua.com/?search=coser", script: "gen.js"},
    ]);
}