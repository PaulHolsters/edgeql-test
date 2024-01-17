import * as edgedb from "edgedb";
import e from "./dbschema/edgeql-js";

const client = edgedb.createClient();

async function main() {
    // result will be inferred based on the query
    const result = await e
        .select(e.Movie, (m) => ({
            title: true,
            actors: () => ({ name: true }),
            messages:e.op(e.str('klote '),'++',m.title),
            filter_single: { title: "Iron Man 2" },
        }))
        .run(client);

    console.log(JSON.stringify(result, null, 2));
}


main();
