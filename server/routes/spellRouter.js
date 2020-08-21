const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//gets all spells from the database
router.get('/', (req, res) => {
    const queryText = `
    SELECT dnd5_spells.*, array_agg(DISTINCT dnd5_classes.class_name) AS classes FROM dnd5_spells
    join dnd5_class_spells
    ON dnd5_class_spells.spell_id = dnd5_spells.spell_id
    join dnd5_classes
    ON dnd5_classes.class_id= dnd5_class_spells.class_id
    GROUP BY dnd5_spells.spell_id
    ORDER BY spell_level ASC;`
    pool.query(queryText)
        .then(result => res.json(result.rows))
        .catch(error => {
            console.log('error in character get', error)
            res.sendStatus(500)
        })
});


module.exports = router;