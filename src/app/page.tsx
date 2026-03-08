import Hero from '@/components/landing/Hero'
import DepartmentGrid from '@/components/landing/DepartmentGrid'
import About from '@/components/landing/About'
import InterviewForm from '@/components/landing/InterviewForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className="divider" />
      <About />
      <hr className="divider" />
      <DepartmentGrid />
      <hr className="divider" />
      <InterviewForm />
    </main>
  )
}
