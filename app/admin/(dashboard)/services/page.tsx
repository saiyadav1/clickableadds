"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceForm } from "./ServiceForm";

export default function AdminServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [editingService, setEditingService] = useState<any | null>(null);

  const fetchServices = async () => {
    const snapshot = await getDocs(collection(db, "services"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setServices(data);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this service?")) return;
    await deleteDoc(doc(db, "services", id));
    fetchServices();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Services Management</h1>
        <Button onClick={() => setEditingService({})}>+ Add Service</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition">
            <CardContent className="p-4 space-y-2">
              <h2 className="font-semibold text-lg">{service.title}</h2>
              <p className="text-sm text-muted-foreground">
                {service.shortDesc}
              </p>
              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setEditingService(service)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(service.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {editingService && (
        <ServiceForm
          service={editingService}
          onClose={() => setEditingService(null)}
          onSaved={fetchServices}
        />
      )}
    </div>
  );
}


