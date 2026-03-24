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


export function ServiceForm({ service = {}, onClose, onSaved }: any) {
  const [form, setForm] = useState({
    title: service.title ?? "",
    slug: service.slug ?? "",
    shortDesc: service.shortDesc ?? "",
    longDesc: service.longDesc ?? "",
    icon: service.icon ?? "",
    ogImage: service.ogImage ?? "",
    color: service.color ?? "text-slate-600",
    bg: service.bg ?? "bg-slate-50/60",
    shadow: service.shadow ?? "hover:shadow-slate-500/20",
    features: service.features ?? [],
    stats: service.stats ?? { label: "", value: "" },
  });
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [newFeature, setNewFeature] = useState("");

  const isEdit = Boolean(service.slug);

  const addFeature = () => {
    if (!newFeature.trim()) return;

    setForm({
      ...form,
      features: [...form.features, newFeature.trim()],
    });

    setNewFeature("");
  };

  const removeFeature = (index: number) => {
    const updated = form.features.filter((_: any, i: number) => i !== index);
    setForm({ ...form, features: updated });
  };

  // const handleSubmit = async () => {
  //   if (!form.slug) {
  //     alert("Slug is required");
  //     return;
  //   }

  //   const ref = doc(db, "services", form.slug);

  //   if (isEdit) {
  //     await updateDoc(ref, {
  //       ...form,
  //       updatedAt: serverTimestamp(),
  //     });
  //   } else {
  //     await setDoc(ref, {
  //       ...form,
  //       createdAt: serverTimestamp(),
  //       updatedAt: serverTimestamp(),
  //     });
  //   }

  //   onSaved();
  //   onClose();
  // };

  const handleSubmit = async () => {
    if (!form.slug) {
      alert("Slug is required");
      return;
    }

    let iconUrl = form.icon;

    if (iconFile) {
      const storageRef = ref(
        storage,
        `public/services/${form.slug}-${Date.now()}`,
      );

      await uploadBytes(storageRef, iconFile);
      iconUrl = await getDownloadURL(storageRef);
    }

    const refDoc = doc(db, "services", form.slug);

    if (isEdit) {
      await updateDoc(refDoc, {
        ...form,
        icon: iconUrl,
        updatedAt: serverTimestamp(),
      });
    } else {
      await setDoc(refDoc, {
        ...form,
        icon: iconUrl,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }

    onSaved();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 space-y-4">
        <h2 className="text-xl font-bold">
          {isEdit ? "Edit Service" : "Add Service"}
        </h2>

        <input
          placeholder="Title"
          className="w-full rounded border p-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          placeholder="Slug (used as URL)"
          className="w-full rounded border p-2"
          value={form.slug}
          disabled={isEdit}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
            })
          }
        />

        <textarea
          placeholder="Short Description"
          className="w-full rounded border p-2"
          value={form.shortDesc}
          onChange={(e) => setForm({ ...form, shortDesc: e.target.value })}
        />

        <textarea
          placeholder="Long Description"
          className="h-28 w-full rounded border p-2"
          value={form.longDesc}
          onChange={(e) => setForm({ ...form, longDesc: e.target.value })}
        />

        <div className="space-y-2">
          <label className="font-medium">Features</label>

          <div className="flex gap-2">
            <input
              placeholder="Add feature"
              className="flex-1 rounded border p-2"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
            />
            <Button type="button" onClick={addFeature}>
              Add
            </Button>
          </div>

          <ul className="space-y-1">
            {form.features.map((feature: string, index: number) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 px-2 py-1 rounded"
              >
                <span>{feature}</span>
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <input
          type="file"
          accept="image/*"
          className="w-full rounded border p-2"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setIconFile(e.target.files[0]);
            }
          }}
        />

        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </div>
    </div>
  );
}