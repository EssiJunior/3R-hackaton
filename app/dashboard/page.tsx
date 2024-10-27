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
  Settings,
  Menu as MenuIcon,
  X,
  Loader,
  User2,
  UserCircle2
} from 'lucide-react'
import DashboardLayout from './layout'

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
  const [showEditAgentModal, setShowEditAgentModal] = useState(false)
  const [agents, setAgents] = useState([
    { id: 1, name: 'Jean Dupont', role: 'Collecteur', performance: 85 },
    { id: 2, name: 'Marie Curie', role: 'Trieur', performance: 92 },
    { id: 3, name: 'Pierre Martin', role: 'Chauffeur', performance: 78 },
  ])
  const [newAgent, setNewAgent] = useState({ name: '', role: '', performance: 0 })
  const [editingAgent, setEditingAgent] = useState(null)
  const [deletingAgentId, setDeletingAgentId] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')

  const handleAddAgent = (e: React.FormEvent) => {
    e.preventDefault()
    setAgents([...agents, { ...newAgent, id: agents.length + 1 }])
    setNewAgent({ name: '', role: '', performance: 0 })
    setShowAddAgentModal(false)
  }

  const handleEditAgent = (agent) => {
    setEditingAgent(agent)
    setShowEditAgentModal(true)
  }

  const handleUpdateAgent = (e: React.FormEvent) => {
    e.preventDefault()
    setAgents(agents.map(agent => agent.id === editingAgent.id ? editingAgent : agent))
    setShowEditAgentModal(false)
    setEditingAgent(null)
  }

  const handleDeleteAgent = async (id) => {
    setDeletingAgentId(id)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setAgents(agents.filter(agent => agent.id !== id))
    setDeletingAgentId(null)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'planning':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Planification</h2>
            <p>Ici, vous pouvez gérer la planification des collectes et des équipes.</p>
          </div>
        )
      case 'reports':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Rapports</h2>
            <p>Consultez et générez des rapports détaillés sur les performances et les opérations.</p>
          </div>
        )
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Paramètres</h2>
            <p>Configurez les paramètres de l application et gérez les préférences utilisateur.</p>
          </div>
        )
      default:
        return (
          <DashboardLayout>
          <>
            {/* Stats */}
            <div className="z-50 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              <div className="overflow-x-auto">
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
                          <button 
                            className="text-indigo-600 hover:text-indigo-900 mr-2"
                            onClick={() => handleEditAgent(agent)}
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            className="text-red-600 hover:text-red-900"
                            onClick={() => handleDeleteAgent(agent.id)}
                            disabled={deletingAgentId === agent.id}
                          >
                            {deletingAgentId === agent.id ? (
                              <Loader size={18} className="animate-spin" />
                            ) : (
                              <Trash2 size={18} />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>

          </DashboardLayout>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 bg-primary text-white w-64 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out z-30`}>
        <div className="flex items-center justify-between h-16 border-b border-primary-dark px-4">
          <span className="text-2xl font-bold">3R Dashboard</span>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <a 
            className={`block py-2 px-4 text-sm hover:bg-primary-dark ${activeSection === 'dashboard' ? 'bg-primary-dark' : ''}`} 
            href="#"
            onClick={() => setActiveSection('dashboard')}
          >
            <Briefcase className="inline-block mr-2" size={18} />
            Vue d ensemble
          </a>
          <a 
            className={`block py-2 px-4 text-sm hover:bg-primary-dark ${activeSection === 'agents' ? 'bg-primary-dark' : ''}`} 
            href="#"
            onClick={() => setActiveSection('agents')}
          >
            <User className="inline-block mr-2" size={18} />
            Agents
          </a>
          <a 
            className={`block py-2 px-4 text-sm hover:bg-primary-dark ${activeSection === 'planning' ? 'bg-primary-dark' : ''}`} 
            href="#"
            onClick={() => setActiveSection('planning')}
          >
            <Calendar className="inline-block mr-2" size={18} />
            Planification
          </a>
          <a 
            className={`block py-2 px-4 text-sm hover:bg-primary-dark ${activeSection === 'reports' ? 'bg-primary-dark' : ''}`} 
            href="#"
            onClick={() => setActiveSection('reports')}
          >
            <FileText className="inline-block mr-2" size={18} />
            Rapports
          </a>
          <a 
            className={`block py-2 px-4 text-sm hover:bg-primary-dark ${activeSection === 'settings' ? 'bg-primary-dark' : ''}`} 
            href="#"
            onClick={() => setActiveSection('settings')}
          >
            <Settings className="inline-block mr-2" size={18} />
            Paramètres
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <button className="mr-4 md:hidden" onClick={toggleMobileMenu}>
              <MenuIcon size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
              <Bell size={20} />
            </button>
            <div className="relative">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <UserCircle2 />
                <span className="hidden md:inline">Ariel fossi</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </header>

        {renderContent()}
      </div>

      {/* Add Agent Modal */}
      {showAddAgentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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

      {/* Edit Agent Modal */}
      {showEditAgentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Modifier l agent</h2>
            <form onSubmit={handleUpdateAgent}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-name">
                  Nom
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="edit-name"
                  type="text"
                  placeholder="Nom de l'agent"
                  value={editingAgent.name}
                  onChange={(e) => setEditingAgent({ ...editingAgent, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-role">
                  Rôle
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="edit-role"
                  type="text"
                  placeholder="Rôle de l'agent"
                  value={editingAgent.role}
                  onChange={(e) => setEditingAgent({ ...editingAgent, role: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edit-performance">
                  Performance (%)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="edit-performance"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Performance de l'agent"
                  value={editingAgent.performance}
                  onChange={(e) => setEditingAgent({ ...editingAgent, performance: parseInt(e.target.value) })}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowEditAgentModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
                >
                  Mettre à jour
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}