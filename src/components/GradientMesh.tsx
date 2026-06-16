export function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <div
        className="mesh-blob absolute -top-1/4 -right-1/4 h-[70vh] w-[70vh] rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--mesh-1) 80%, transparent), transparent 70%)',
        }}
      />
      <div
        className="mesh-blob absolute top-1/3 -left-1/4 h-[60vh] w-[60vh] rounded-full opacity-50"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--mesh-2) 70%, transparent), transparent 70%)',
        }}
      />
      <div
        className="mesh-blob absolute -bottom-1/4 right-1/4 h-[50vh] w-[50vh] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--mesh-3) 80%, transparent), transparent 70%)',
        }}
      />
    </div>
  )
}
