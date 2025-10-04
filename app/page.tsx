"use client";
import Link from "next/link";

// Basit Terraform tanıtım sayfası
// Sadece Next.js + Tailwind kullanır

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
            {/* Header */}
            <header className="border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur">
                <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
                    <h1 className="font-bold text-lg">Terraform Template</h1>
                    <nav className="flex gap-4 text-sm">
                        <a href="#what">Nedir?</a>
                        <a href="#steps">Adımlar</a>
                        <a href="#snippet">Örnek Kod</a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="mx-auto max-w-4xl px-4 py-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                    Terraform ile Altyapınızı Kodla Yönetin
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
                    Bu basit sayfa, Terraform’un temel mantığını ve en çok kullanılan
                    komutları açıklayıcı bir şekilde sunar.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                    <a href="#steps" className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:brightness-110">
                        🚀 Hızlı Başlangıç
                    </a>
                    <a href="#snippet" className="rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
                        📋 Kod Örneği
                    </a>
                </div>
            </section>

            {/* What is Terraform */}
            <section id="what" className="mx-auto max-w-4xl px-4 py-10">
                <h3 className="text-xl font-semibold mb-3">Terraform Nedir?</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                    Terraform, altyapınızı kodla tanımlamanızı sağlayan bir araçtır. AWS, Azure,
                    GCP gibi bulut sağlayıcılarında kaynakları otomatik, güvenli ve tekrarlanabilir
                    şekilde oluşturabilirsiniz.
                </p>
            </section>

            {/* Steps */}
            <section id="steps" className="mx-auto max-w-4xl px-4 py-10">
                <h3 className="text-xl font-semibold mb-3">Temel Adımlar</h3>
                <ul className="space-y-4 text-sm sm:text-base">
                    <li>
                        <strong>1. Init:</strong> Provider eklentilerini indirir.
                        <Code>{`terraform init`}</Code>
                    </li>
                    <li>
                        <strong>2. Plan:</strong> Yapılacak değişiklikleri gösterir.
                        <Code>{`terraform plan`}</Code>
                    </li>
                    <li>
                        <strong>3. Apply:</strong> Planlanan değişiklikleri uygular.
                        <Code>{`terraform apply`}</Code>
                    </li>
                    <li>
                        <strong>4. Destroy:</strong> Kaynakları temizler.
                        <Code>{`terraform destroy`}</Code>
                    </li>
                </ul>
            </section>

            {/* Code Example */}
            <section id="snippet" className="mx-auto max-w-4xl px-4 py-10">
                <h3 className="text-xl font-semibold mb-3">Örnek Terraform Kodu</h3>
                <Code>{`provider "aws" {
  region = "eu-central-1"
}

resource "aws_s3_bucket" "example" {
  bucket = "my-terraform-bucket-demo"
  acl    = "private"
}`}</Code>
            </section>

            {/* Footer */}
            <footer className="mt-auto border-t border-slate-200 dark:border-slate-800">
                <div className="mx-auto max-w-4xl px-4 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    Hazırlayan: Terraform Starter Template • Next.js + Tailwind
                </div>
            </footer>
        </div>
    );
}

function Code({ children }: { children: string }) {
    return (
        <pre className="mt-2 text-xs bg-slate-900 text-slate-100 rounded-lg p-3 overflow-x-auto">
      <code>{children}</code>
    </pre>
    );
}
