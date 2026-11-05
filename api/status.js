const SERVER_STATUS = {
    online: null,
    hostname: "Tropiko UndergroundRP",
    address: "mtasa://143.14.88.9:34733",
    serverIp: "143.14.88.9",
    serverPort: 34733,
    players: null,
    maxPlayers: null,
    gamemode: "Roleplay"
};

function json(data, status = 200) {
    return Response.json(data, {
        status,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Cache-Control": "no-store"
        }
    });
}

export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        }
    });
}

export async function GET() {
    return json(SERVER_STATUS);
}
