# ShreeTech Solutions — CRM & Sales Pipeline

A full-stack B2B CRM web application built for ShreeTech Solutions, a real import-export business dealing in industrial automation products (Honeywell, Siemens, Resideo, Ontic) across India and the Middle East.

## Problem it solves
ShreeTech was tracking enquiries, follow-ups, quotations, and orders manually on WhatsApp and Excel. Leads went cold, deals were lost, and there was no visibility from first customer contact to final payment.

## Features (building over 28 days)
- AI-powered enquiry chatbot (Claude API) — replaces static contact form
- Lead management with AI scoring (0-100) per prospect
- WhatsApp message parser — paste a message, auto-fill enquiry fields
- Pricing engine — converts USD/EUR purchase price to INR selling price with margin
- Drag-and-drop Kanban board for order tracking
- Import document checklist per shipment
- Payment tracker with partial payment support and overdue flagging
- Analytics dashboard with territory heatmap (India + Middle East)
- TensorFlow.js demand forecasting model
- Real-time notifications with Socket.io
- JWT authentication with Admin and Sales roles
- One-click PDF quotation export

## Tech Stack
- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Node.js + Express
- **Database:** PostgreSQL + Prisma ORM
- **AI:** Claude API (chatbot, lead scoring, message parsing, price suggestion)
- **ML:** TensorFlow.js (demand forecasting)
- **Real-time:** Socket.io
- **Auth:** JWT + bcrypt
- **Deploy:** Vercel (frontend) + Railway (backend + DB)

## Project Structure
shreetech-crm/
├── client/     # React + Vite frontend
└── server/     # Node.js + Express backend

## Status
🚧 Currently building — Day 1 of 28

## Author
Khushi Rao