import nodes from '../models/nodes.models'

const getNodes = async (req, res) => {
  const allNodes = await nodes.find()
  res.json(allNodes)
}

export { getNodes }