const express = require('express')
const router = express.Router()

// Temporary data — we replace this with a real database on Day 5
let leads = [
  {
    id: 1,
    company: 'ABC Bakeries',
    contact: 'Rahul Shah',
    phone: '9876543210',
    vertical: 'BAKERY',
    region: 'INDIA_MH',
    status: 'NEW'
  },
  {
    id: 2,
    company: 'Gujarat Steel Works',
    contact: 'Amit Patel',
    phone: '9123456789',
    vertical: 'STEEL',
    region: 'INDIA_GJ',
    status: 'CONTACTED'
  }
]

// GET /api/leads — get all leads
router.get('/', (req, res) => {
  res.json({ success: true, data: leads })
})

// GET /api/leads/:id — get one lead
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const lead = leads.find(l => l.id === id)
  if (!lead) {
    return res.status(404).json({ success: false, message: 'Lead not found' })
  }
  res.json({ success: true, data: lead })
})

// POST /api/leads — create a new lead
router.post('/', (req, res) => {
  const { company, contact, phone, vertical, region } = req.body
  if (!company || !contact || !phone) {
    return res.status(400).json({ success: false, message: 'Company, contact and phone are required' })
  }
  const newLead = {
    id: leads.length + 1,
    company,
    contact,
    phone,
    vertical: vertical || 'OTHER',
    region: region || 'INDIA_MH',
    status: 'NEW'
  }
  leads.push(newLead)
  res.status(201).json({ success: true, data: newLead })
})

// PUT /api/leads/:id — update a lead
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = leads.findIndex(l => l.id === id)
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Lead not found' })
  }
  leads[index] = { ...leads[index], ...req.body }
  res.json({ success: true, data: leads[index] })
})

// DELETE /api/leads/:id — delete a lead
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = leads.findIndex(l => l.id === id)
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Lead not found' })
  }
  leads.splice(index, 1)
  res.json({ success: true, message: 'Lead deleted successfully' })
})

module.exports = router