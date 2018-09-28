module.exports = {
    getAll: (req, res)=>{
        const dbInstance = req.app.get('db')
        dbInstance.get_inventory()
        .then(product=>res.status(200).send(product))
        .catch(err=>{res.status(500).send({errorMessage: 'Something went wrong'})
        console.log(err)
    })
    },
    create: (req, res)=>{
        const {name,price,image_url} = req.body
        const dbInstance = req.app.get('db')
        dbInstance.create_inventory([name,price,image_url])
        .then(res.sendStatus(200))
        .catch(err=>{res.status(500).send({errorMessage: 'Something went wrong'})
        console.log(err)
    })
    },
    delete: (req, res)=>{
        const {id} = req.params
        const dbInstance = req.app.get('db')
        dbInstance.delete_inventory([id])
        .then(res.sendStatus(200))
        .catch(err=>{res.status(500).send({errorMessage:'something went wrong'})
        console.log(err)
    })
    },
}