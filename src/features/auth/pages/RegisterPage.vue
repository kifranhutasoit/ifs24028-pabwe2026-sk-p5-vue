<template>
  <form @submit.prevent="onSubmitHandler" class="space-y-4">
    <div>
      <label
        for="register-name-input"
        class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5"
      >
        Nama Lengkap
      </label>
      <div class="relative">
        <User
          :size="18"
          aria-hidden="true"
          class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          id="register-name-input"
          data-testid="register-name-input"
          v-model="name"
          autocomplete="name"
          placeholder="Nama Lengkap Anda"
          class="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
          required
        />
      </div>
    </div>

    <div>
      <label
        for="register-email-input"
        class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5"
      >
        Alamat Email
      </label>
      <div class="relative">
        <Mail
          :size="18"
          aria-hidden="true"
          class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="email"
          id="register-email-input"
          data-testid="register-email-input"
          v-model="email"
          autocomplete="email"
          placeholder="nama@email.com"
          class="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
          required
        />
      </div>
    </div>

    <div>
      <label
        for="register-password-input"
        class="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5"
      >
        Kata Sandi
      </label>
      <div class="relative">
        <Lock
          :size="18"
          aria-hidden="true"
          class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="password"
          id="register-password-input"
          data-testid="register-password-input"
          v-model="password"
          autocomplete="new-password"
          placeholder="Minimal 6 karakter"
          class="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
          required
        />
      </div>
    </div>

    <!-- bagian button tetap sama -->
  </form>
</template>