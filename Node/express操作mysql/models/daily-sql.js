var DailySql = {
  insert: 'INSERT INTO article(article_type, title, intro, imgUrl, link) VALUES(?, ?, ?, ?, ?)',
  query: 'SELECT FROM article WHERE article_type = ?',
  queryAll: 'SELECT * FROM article'
};

module.exports = DailySql