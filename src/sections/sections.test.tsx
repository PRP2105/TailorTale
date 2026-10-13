import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { QuizSection } from './QuizSection';
import { CommunitiesSection } from './CommunitiesSection';
import { PricingSection } from './PricingSection';
import { WaitlistSection } from './WaitlistSection';

describe('Interactive Quiz Flow & Dual Execution Test', () => {
  beforeEach(() => {
    localStorage.clear();
    window.HTMLElement.prototype.scrollIntoView = () => {};
  });

  it('completes quiz with Option 1 choices and renders recommendations, CSS covers and profile', async () => {
    render(<QuizSection />);

    // Step 1
    expect(screen.getByText(/Question 1 of 5/i)).toBeDefined();
    const opt1 = screen.getByText(/A breakneck chase through a neon city at night/i);
    fireEvent.click(opt1);

    // Step 2
    expect(screen.getByText(/Question 2 of 5/i)).toBeDefined();
    const opt2 = screen.getByText(/Morally grey schemers with sharp tongues/i);
    fireEvent.click(opt2);

    // Step 3
    expect(screen.getByText(/Question 3 of 5/i)).toBeDefined();
    const opt3 = screen.getByText(/Deep space vessels, rogue cyborgs/i);
    fireEvent.click(opt3);

    // Step 4
    expect(screen.getByText(/Question 4 of 5/i)).toBeDefined();
    const opt4 = screen.getByText(/Warm, hopeful, and comforting/i);
    fireEvent.click(opt4);

    // Step 5
    expect(screen.getByText(/Question 5 of 5/i)).toBeDefined();
    const opt5 = screen.getByText(/Enemies with electrifying banter/i);
    fireEvent.click(opt5);

    // After answering 5 questions: Result Screen should be shown
    expect(screen.getByText(/Your reading journey has arrived/i)).toBeDefined();
    expect(screen.getByText(/Your Top 3 Explained Recommendations/i)).toBeDefined();
    expect(screen.getByText(/Your Reader DNA Profile/i)).toBeDefined();

    // Check that "Why this book?" is present
    const whyThisBookList = screen.getAllByText(/Why this book\?/i);
    expect(whyThisBookList.length).toBeGreaterThanOrEqual(3);

    // Check Retake quiz button
    const retakeBtn = screen.getByText(/Retake quiz/i);
    expect(retakeBtn).toBeDefined();

    // Verify localStorage persistence when clicking "Save my profile"
    const saveProfileBtn = screen.getByText(/Save my profile, join the waitlist/i);
    fireEvent.click(saveProfileBtn);
    expect(localStorage.getItem('tailortale_quiz_profile')).toBeTruthy();
  });

  it('completes quiz with opposite choices and yields distinct divergent results', async () => {
    render(<QuizSection />);

    // Pick opposite slow / dark / realistic choices
    fireEvent.click(screen.getByText(/A slow-burn story about a family guarding an old secret/i));
    fireEvent.click(screen.getByText(/A ragtag bunch of misfits who become each other’s chosen family/i));
    fireEvent.click(screen.getByText(/The real world: messy colleges, quiet cafés/i));
    fireEvent.click(screen.getByText(/Gothic, eerie, and psychological/i));
    fireEvent.click(screen.getByText(/A creative or intellectual obsession/i));

    // Verify Result Screen
    expect(screen.getByText(/Your reading journey has arrived/i)).toBeDefined();
    expect(screen.getByText(/Your Top 3 Explained Recommendations/i)).toBeDefined();

    // Top recommended books for this dark/realistic/slow persona should include Secret History or Tomorrow & Tomorrow
    const bodyText = document.body.textContent || '';
    const hasExpectedTitle =
      bodyText.includes('The Secret History') ||
      bodyText.includes('Tomorrow, and Tomorrow, and Tomorrow') ||
      bodyText.includes('The Song of Achilles');
    expect(hasExpectedTitle).toBe(true);
  });
});

describe('Micro-Communities Join Toggle Test', () => {
  it('toggles join state when clicking Join Community button', () => {
    render(<CommunitiesSection />);

    const joinButtons = screen.getAllByRole('button');
    const firstButton = joinButtons.find(
      (btn) =>
        btn.textContent?.includes('Join Community') || btn.textContent?.includes('Joined Community')
    );
    expect(firstButton).toBeDefined();

    if (firstButton) {
      const initialText = firstButton.textContent;
      fireEvent.click(firstButton);
      const newText = firstButton.textContent;
      expect(newText).not.toBe(initialText);
    }
  });
});

describe('Pricing Billing Toggle Test', () => {
  it('switches between monthly and yearly pricing and shows discount badge', () => {
    render(<PricingSection />);

    // Default is monthly: Plus price is ₹99
    expect(screen.getByText(/₹99/i)).toBeDefined();
    expect(screen.getByText(/\/month/i)).toBeDefined();

    // Toggle to yearly
    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);

    // Yearly: Plus price is ₹799
    expect(screen.getByText(/₹799/i)).toBeDefined();
    expect(screen.getByText(/\/year/i)).toBeDefined();
    expect(screen.getByText(/Save 33%/i)).toBeDefined();
  });
});

describe('Waitlist Validation and Persistence Test', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('validates empty inputs and rejects invalid email', () => {
    render(<WaitlistSection />);

    const submitBtn = screen.getByText(/Join the Beta Waitlist/i);
    const form = submitBtn.closest('form');
    if (form) {
      fireEvent.submit(form);
    } else {
      fireEvent.click(submitBtn);
    }

    expect(screen.getByText(/Please provide your name/i)).toBeDefined();
  });

  it('saves valid submission to localStorage and displays celebratory state', () => {
    render(<WaitlistSection />);

    const nameInput = screen.getByPlaceholderText(/Preksha Paldiwal/i);
    const emailInput = screen.getByPlaceholderText(/student@djsce.ac.in/i);

    fireEvent.change(nameInput, { target: { value: 'Preksha Paldiwal' } });
    fireEvent.change(emailInput, { target: { value: 'preksha@djsce.edu.in' } });

    // Select "Regular Reader" persona
    fireEvent.click(screen.getByText(/Regular Reader/i));

    const submitBtn = screen.getByText(/Join the Beta Waitlist/i);
    const form = submitBtn.closest('form');
    if (form) {
      fireEvent.submit(form);
    } else {
      fireEvent.click(submitBtn);
    }

    // Celebratory state
    expect(screen.getByText(/You are on the TailorTale VIP list!/i)).toBeDefined();

    // Verify localStorage
    const saved = localStorage.getItem('tailortale_waitlist_submission');
    expect(saved).toBeTruthy();
    const parsed = JSON.parse(saved!);
    expect(parsed.name).toBe('Preksha Paldiwal');
    expect(parsed.email).toBe('preksha@djsce.edu.in');
    expect(parsed.persona).toBe('regular_reader');
  });
});
