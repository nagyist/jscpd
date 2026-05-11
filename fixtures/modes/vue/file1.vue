<script setup lang="ts">
// Copyright (c) 2024 ACME Corp. All rights reserved.
// This source code is licensed under the MIT License.
// See the LICENSE file at https://acme.com/license
//
// @author Engineering Team <eng@acme.com>

/* eslint-disable max-len */

/**
 * @copyright 2024 ACME Corp.
 * @license MIT
 */

const ALPHA = { id: 'user-001', label: 'Alpha User' };
function greetAlpha(): string { return `Hello ${ALPHA.label}`; }

const registrationForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password: string): boolean {
  return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
}

function passwordsMatch(form: typeof registrationForm): boolean {
  return form.password === form.confirmPassword;
}

function buildSubmitPayload(form: typeof registrationForm) {
  return {
    fullName: `${form.firstName} ${form.lastName}`.trim(),
    email: form.email.toLowerCase(),
    passwordHash: btoa(form.password),
  };
}

const registrationErrors: Record<string, string> = {};

function validateForm(form: typeof registrationForm): boolean {
  Object.keys(registrationErrors).forEach(k => delete registrationErrors[k]);
  if (!form.firstName) registrationErrors.firstName = 'First name is required';
  if (!validateEmail(form.email)) registrationErrors.email = 'Invalid email address';
  if (!validatePassword(form.password)) registrationErrors.password = 'Password too weak';
  if (!passwordsMatch(form)) registrationErrors.confirmPassword = 'Passwords do not match';
  return Object.keys(registrationErrors).length === 0;
}
</script>
<template>
  <!--
    Copyright (c) 2024 ACME Corp. All rights reserved.
    This template is licensed under the MIT License.
    See the LICENSE file at https://acme.com/license
  -->
  <!-- Component: UserRegistrationForm — collects new user account details -->
  <div class="alpha-user-registration" data-testid="alpha-001">
    <h2>{{ greetAlpha() }}</h2>
    <p>ID: {{ ALPHA.id }}</p>
    <form class="registration-form" @submit.prevent="validateForm(registrationForm)">
      <fieldset>
        <legend>Personal Info</legend>
        <label>First Name <input v-model="registrationForm.firstName" type="text" /></label>
        <label>Last Name  <input v-model="registrationForm.lastName"  type="text" /></label>
        <label>Email      <input v-model="registrationForm.email"     type="email" /></label>
        <span v-if="registrationErrors.email" class="error">{{ registrationErrors.email }}</span>
      </fieldset>
      <fieldset>
        <legend>Security</legend>
        <label>Password         <input v-model="registrationForm.password"        type="password" /></label>
        <label>Confirm Password <input v-model="registrationForm.confirmPassword" type="password" /></label>
        <span v-if="registrationErrors.confirmPassword" class="error">{{ registrationErrors.confirmPassword }}</span>
      </fieldset>
      <button type="submit">Create Account</button>
    </form>
  </div>
</template>
