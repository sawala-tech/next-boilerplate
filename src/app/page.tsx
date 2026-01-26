export const metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | Dashboard'
  }
}

export default function DashboardPage() {
  const processEnv = process.env.MODE || 'development'
  const MODE = [
    { value: 'development', label: 'Development' },
    { value: 'staging', label: 'Staging' },
    { value: 'production', label: 'Production' }
  ]

  return (
    <div className="hdvh flex min-h-screen items-center justify-center">
      <h1 className="text-primary-blue text-2xl font-bold">
        Welcome to the Dashboard ({MODE.find((mode) => mode.value === processEnv)?.label} Mode)
      </h1>
    </div>
  )
}
