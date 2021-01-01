import { testEnvironmentVariable } from '../settings';

export const indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });

export const secondIndexPage = (req, res) => res.status(200).json({ message: "HAHA" });