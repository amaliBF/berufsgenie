import AppNotifyForm from '@/components/AppNotifyForm';

export default function AppCTA({ title, description }: { title?: string; description?: string }) {
  return (
    <AppNotifyForm
      variant="banner"
      title={title || 'Die Genie-App kommt bald!'}
      description={description || 'Kein Anschreiben. Kein Lebenslauf hochladen. Trag dich ein und erfahre als Erstes, wenn die App verfügbar ist.'}
    />
  );
}
