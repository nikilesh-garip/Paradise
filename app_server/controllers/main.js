/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'Paradise' });
};
module.exports = {
index

};