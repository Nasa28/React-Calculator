import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Calculator from '../Pages/Calculator/Calculator';

describe('Calculator', () => {
  test('Test the presence of button number 1', () => {
    render(<Calculator />);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('Test the presence of button number 2', () => {
    render(<Calculator />);

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('Test the presence of button number 3', () => {
    render(<Calculator />);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  test('Test the presence of button number 4', () => {
    render(<Calculator />);

    expect(screen.getByText('4')).toBeInTheDocument();
  });

  test('Test the presence of button number 5', () => {
    render(<Calculator />);

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('Test the presence of button number 6', () => {
    render(<Calculator />);

    expect(screen.getByText('6')).toBeInTheDocument();
  });

  test('Test the presence of button number 7', () => {
    render(<Calculator />);

    expect(screen.getByText('7')).toBeInTheDocument();
  });

  test('Test the presence of button number 8', () => {
    render(<Calculator />);

    expect(screen.getByText('8')).toBeInTheDocument();
  });

  test('Test the presence of button number 9', () => {
    render(<Calculator />);

    expect(screen.getByText('9')).toBeInTheDocument();
  });

  test('Test the presence of button number .', () => {
    render(<Calculator />);

    expect(screen.getByText('.')).toBeInTheDocument();
  });

  test('Test the presence of button number AC', () => {
    render(<Calculator />);

    expect(screen.getByText('AC')).toBeInTheDocument();
  });

  test('Test the presence of button number =', () => {
    render(<Calculator />);

    expect(screen.getByText('=')).toBeInTheDocument();
  });

  test('Test the presence of button number +/-', () => {
    render(<Calculator />);

    expect(screen.getByText('+/-')).toBeInTheDocument();
  });

  test('Test the presence of button number +', () => {
    render(<Calculator />);

    expect(screen.getByText('+')).toBeInTheDocument();
  });

  test('Test the presence of button number -', () => {
    render(<Calculator />);

    expect(screen.getByText('-')).toBeInTheDocument();
  });

  test('Test the presence of button number x', () => {
    render(<Calculator />);

    expect(screen.getByText('x')).toBeInTheDocument();
  });

  test('Test the presence of button number ÷', () => {
    render(<Calculator />);

    expect(screen.getByText('÷')).toBeInTheDocument();
  });

  test('Test the presence of button number %', () => {
    render(<Calculator />);

    expect(screen.getByText('%')).toBeInTheDocument();
  });
});
