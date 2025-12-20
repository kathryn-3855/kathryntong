"use client"
import type React from "react"

import { useState } from "react"
import { Calendar, Clock, MapPin, FileText, User, Mail, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useTranslations } from "@/lib/use-translations"

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  documentType: string
  appointmentDate: string
  appointmentTime: string
  location: string
  notes: string
}

const serviceTypes = [
  "Mobile Notary",
  "Apostille Services",
  "Legalization",
  "Bulk Orders",
  "Real Estate Documents",
  "Commercial Documents",
]

const documentTypes = [
  "Power of Attorney",
  "Healthcare Directive",
  "Deed",
  "Affidavit",
  "Contract",
  "Purchase Agreement",
  "Lease",
  "Birth Certificate",
  "Marriage Certificate",
  "Other",
]

export default function AppointmentClientPage() {
  const t = useTranslations()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    documentType: "",
    appointmentDate: "",
    appointmentTime: "",
    location: "",
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Appointment request:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        documentType: "",
        appointmentDate: "",
        appointmentTime: "",
        location: "",
        notes: "",
      })
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{t.appointmentTitle}</h1>
            <p className="text-lg text-muted-foreground">{t.appointmentSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Calendar,
                title: t.appointmentFlexDates,
                desc: t.appointmentFlexDatesDesc,
              },
              {
                icon: Clock,
                title: t.appointmentFlexHours,
                desc: t.appointmentFlexHoursDesc,
              },
              {
                icon: MapPin,
                title: t.appointmentMobileService,
                desc: t.appointmentMobileServiceDesc,
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          {submitted ? (
            <Card className="p-8 text-center bg-green-50 border-green-200">
              <h2 className="text-2xl font-bold text-green-900 mb-4">{t.appointmentSubmitted}</h2>
              <p className="text-green-700 mb-4">{t.appointmentSubmittedDesc}</p>
              <p className="text-sm text-green-600">
                {t.appointmentExpectedResponse + new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
            </Card>
          ) : (
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.appointmentYourInfo}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <User size={16} className="inline mr-2" />
                        {t.appointmentFullName} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Phone size={16} className="inline mr-2" />
                        {t.appointmentPhone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                        placeholder="626-590-3560"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Mail size={16} className="inline mr-2" />
                        {t.appointmentEmail} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.appointmentServiceDetails}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t.appointmentServiceType} *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="">{t.appointmentSelectService}</option>
                        {serviceTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <FileText size={16} className="inline mr-2" />
                        {t.appointmentDocumentType} *
                      </label>
                      <select
                        name="documentType"
                        value={formData.documentType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="">{t.appointmentSelectDocument}</option>
                        {documentTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.appointmentAppointmentDetails}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Calendar size={16} className="inline mr-2" />
                        {t.appointmentPreferredDate} *
                      </label>
                      <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Clock size={16} className="inline mr-2" />
                        {t.appointmentPreferredTime} *
                      </label>
                      <input
                        type="time"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <MapPin size={16} className="inline mr-2" />
                      {t.appointmentLocation} *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      placeholder={t.appointmentLocationPlaceholder}
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.appointmentAdditionalNotes}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    rows={4}
                    placeholder={t.appointmentNotesPlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  {t.appointmentSubmit}
                </button>
              </form>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
