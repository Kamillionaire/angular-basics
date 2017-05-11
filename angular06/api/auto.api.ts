import * as express from 'express';

let router = express.Router();

let autos: any[] = [
  {   "id": 1,
      "make": "Subaru",
      "model": "CrossTrek",
      "year": 2014
  },
  {   "id": 2,
      "make": "Subaru",
      "model": "Outback",
      "year": 2017
  },
];

  /**
  * Read all resource (cRud)
  *
  * Get all autos
  */
router.get('/', (req, res)=>{
    res.status(200).json(autos);
});

  /**
  * Read Specific resource (cRud)
  *
  * Get auto by ID
  */
router.get('/:id', (req, res)=>{
  let id = req.params.id;

  let record = autos.filter((item): boolean =>{
      return item.id == id;
  })[0];

  if (record) {
    res.status(200)
        .json(record)
        .end();

  }

  res.status(404)
    .json('Auto Not Found')
    .end();
})
  /**
  * ADD Specific resource (cRud)
  *
  * Add all autos to the list
  */
router.post('/', (req, res)=>{
  let auto = req.body;

    // save auto in collection
    auto.id = autos.length = 1;
    autos.push(auto);
    
    res
      .status(201)
      .header('Location', `api/autos/${auto.id}`)
      .json(auto);
})

export default router
