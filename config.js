// Sample config file. Create on for you app/ cluster name -
// e.g. : api-auth.dev.config.json

module.exports = {
    rest: {
        port: 8090,
        docs : {
            'Inventory Service' : '/api/v3/inventories/spec'
        },
        schemas : {
            'Inventory Service' : '/api/v3/inventories/schema'
        }
    },
    ZENDESK_TOKEN : `${process.env.ZENDESK_TOKEN}`,
    JWT_TOKEN_SECRET : `${process.env.JWT_TOKEN_SECRET}`
}

