export default function handler(req, res) {
  const items = [
    { id: 1, title: 'First item', description: 'This is a sample prototype item.' },
    { id: 2, title: 'Second item', description: 'Another item to show the API.' },
    { id: 3, title: 'Third item', description: 'More sample data.' }
  ]

  res.status(200).json({ items })
}
