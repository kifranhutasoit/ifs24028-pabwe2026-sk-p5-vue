<template>
  <form @submit.prevent="onSubmitHandler" class="space-y-4">
    <div>
      <label
        for="login-email-input"
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
          id="login-email-input"
          data-testid="login-email-input"
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
        for="login-password-input"
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
          id="login-password-input"
          data-testid="login-password-input"
          v-model="password"
          autocomplete="current-password"
          placeholder="••••••••"
          class="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
          required
        />
      </div>
    </div>

    <!-- bagian button tetap sama -->
  </form>
</template>