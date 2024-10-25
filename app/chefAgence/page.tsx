'use client'

import React, { useState } from 'react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'
import { 
  UserPlus, 
  Trash2, 
  Edit, 
  ChevronDown, 
  Bell, 
  User,
  Briefcase,
  Calendar,
  FileText,
  Settings
} from 'lucide-react'

const data = [
  { name: 'Jan', collecte: 4000, recyclage: 2400, valorisation: 2400 },
  { name: 'Fév', collecte: 3000, recyclage: 1398, valorisation: 2210 },
  { name: 'Mar', collecte: 2000, recyclage: 9800, valorisation: 2290 },
  { name: 'Avr', collecte: 2780, recyclage: 3908, valorisation: 2000 },
  { name: 'Mai', collecte: 1890, recyclage: 4800, valorisation: 2181 },
  { name: 'Juin', collecte: 2390, recyclage: 3800, valorisation: 2500 },
]

export default function DashboardPage() {
  const [showAddAgentModal, setShowAddAgentModal] = useState(false)
  const [agents, setAgents] = useState([
    { id: 1, name: 'Jean Dupont', role: 'Collecteur', performance: 85 },
    { id: 2, name: 'Marie Curie', role: 'Trieur', performance: 92 },
    { id: 3, name: 'Pierre Martin', role: 'Chauffeur', performance: 78 },
  ])
  const [newAgent, setNewAgent] = useState({ name: '', role: '', performance: 0 })

  const handleAddAgent = (e: React.FormEvent) => {
    e.preventDefault()
    setAgents([...agents, { ...newAgent, id: agents.length + 1 }])
    setNewAgent({ name: '', role: '', performance: 0 })
    setShowAddAgentModal(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 bg-primary text-white w-64 hidden md:block">
        <div className="flex items-center justify-center h-16 border-b border-primary-dark">
          <span className="text-2xl font-bold">3R Dashboard</span>
        </div>
        <nav className="mt-8">
          <a className="block py-2 px-4 text-sm hover:bg-primary-dark" href="#">
            <Briefcase className="inline-block mr-2" size={18} />
            Vue densemble
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-primary-dark" href="#">
            <User className="inline-block mr-2" size={18} />
            Agents
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-primary-dark" href="#">
            <Calendar className="inline-block mr-2" size={18} />
            Planification
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-primary-dark" href="#">
            <FileText className="inline-block mr-2" size={18} />
            Rapports
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-primary-dark" href="#">
            <Settings className="inline-block mr-2" size={18} />
            Paramètres
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
              <Bell size={20} />
            </button>
            <div className="relative">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <img src="/placeholder.svg" alt="Profile" className="w-8 h-8 rounded-full" />
                <span>John Doe</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Collecté</h3>
            <p className="text-3xl font-bold text-primary">15,890 kg</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Taux de Recyclage</h3>
            <p className="text-3xl font-bold text-primary">68%</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Satisfaction Client</h3>
            <p className="text-3xl font-bold text-primary">4.7/5</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Mensuelle</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="collecte" fill="#82c247" />
              <Bar dataKey="recyclage" fill="#519258" />
              <Bar dataKey="valorisation" fill="#2a5a40" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Agents List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Agents</h2>
            <button 
              onClick={() => setShowAddAgentModal(true)}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
              <UserPlus size={18} className="inline-block mr-2" />
              Ajouter un agent
            </button>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {agents.map((agent) => (
                <tr key={agent.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{agent.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{agent.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${agent.performance}%` }}></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{agent.performance}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Agent Modal */}
      {showAddAgentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Ajouter un agent</h2>
            <form onSubmit={handleAddAgent}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nom
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nom de l'agent"
                  value={newAgent.name}
                  onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                  Rôle
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="role"
                  type="text"
                  placeholder="Rôle de l'agent"
                  value={newAgent.role}
                  onChange={(e) => setNewAgent({ ...newAgent, role: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="performance">
                  Performance initiale (%)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="performance"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Performance de l'agent"
                  value={newAgent.performance}
                  onChange={(e) => setNewAgent({ ...newAgent, performance: parseInt(e.target.value) })}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddAgentModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}