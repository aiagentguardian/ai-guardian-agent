import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Loader } from 'lucide-react';
import { analyzeRepository } from '../lib/api';

// Rest of the file remains the same...