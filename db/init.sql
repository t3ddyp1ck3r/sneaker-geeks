CREATE TABLE IF NOT EXISTS shoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(255),
  sport VARCHAR(50),
  is_on_sale BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  shoe_id INT NOT NULL,
  FOREIGN KEY (shoe_id) REFERENCES shoes(id)
);

INSERT INTO shoes (name, price, image_url, sport, is_on_sale) VALUES
('Nike LeBron 21', 200.00, 'https://placehold.co/300', 'Basketball', FALSE),
('Nike KD 17', 150.00, 'https://placehold.co/300', 'Basketball', TRUE),
('Nike Kobe 8 Protro', 190.00, 'https://placehold.co/300', 'Basketball', FALSE),
('Nike Ja 2', 120.00, 'https://placehold.co/300', 'Basketball', TRUE),
('Nike Air Zoom G.T. Cut 3', 160.00, 'https://placehold.co/300', 'Basketball', FALSE);