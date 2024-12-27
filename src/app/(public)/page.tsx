"use client";

import { Select } from "@/components/shared/Select";
import { useState } from "react";
import styles from './styles.module.scss'

export default function Page() {
  const statusOptions = ["Pendente", "Em andamento", "Concluída"] as const;
  const [status, setStatus] = useState<(typeof statusOptions)[number] | null>(
    null
  );

  return (
    <div className={styles.container}>
      <h2>Home</h2>
      <p>Welcome to the home</p>

      <Select
        label="Status"
        placeholder="Selecione uma opção"
        options={statusOptions}
        value={status}
        onChange={setStatus}
      />
    </div>
  );
}
