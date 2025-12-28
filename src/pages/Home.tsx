import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useAppSelector } from '../hooks/redux';

const Home: React.FC = () => {
  const { profile, user } = useAppSelector((state) => state.auth);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
              animate={{ y: [40, 0], opacity: [0, 1] }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              initial={{ opacity: 0, y: 40 }}
            >
              Supercharge your workflow with
              <span className="block text-purple-400 mt-2">
                TaskUno
              </span>
            </motion.h1>

            {profile && (
              <motion.h2
                className="text-2xl font-semibold text-blue-400 mb-4"
                animate={{ opacity: [0, 1], x: [-30, 0] }}
                transition={{ delay: 0.5, duration: 0.8 }}
                initial={{ opacity: 0, x: -30 }}
              >
                Welcome back, {profile.firstName} {profile.lastName}!
              </motion.h2>
            )}

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Organize your tasks visually, collaborate with your team, and boost productivity with our powerful project management platform.
            </p>

            {!user && (
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                animate={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ delay: 0.8, duration: 0.8 }}
                initial={{ opacity: 0, y: 20 }}
              >
                <Link
                  to="/register"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Sign In
                </Link>
              </motion.div>
            )}

            {user && (
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                animate={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ delay: 0.8, duration: 0.8 }}
                initial={{ opacity: 0, y: 20 }}
              >
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  View Projects
                </Link>
                <Link
                  to="/kanban"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Open Kanban Board
                </Link>
              </motion.div>
            )}
          </div>
          <div className="flex-1 max-w-lg w-full shadow-2xl rounded-xl overflow-hidden">
            <AwesomeSlider bullets={false} organicArrows={true}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="TaskUno Kanban Board"
                  className="object-cover w-full h-72"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="TaskUno Project Management"
                  className="object-cover w-full h-72"
                />
              </div>
              <div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1664461662789-b72903263bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="TaskUno Team Collaboration"
                  className="object-cover w-full h-72"
                />
              </div>
            </AwesomeSlider>
          </div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          animate={{ opacity: [0, 1], y: [30, 0] }}
          transition={{ delay: 1, duration: 0.8 }}
          initial={{ opacity: 0, y: 30 }}
        >
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors">
            <div className="text-purple-400 text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-white mb-2">Kanban Board</h3>
            <p className="text-gray-400">
              Visualize your tasks with drag-and-drop Kanban boards. Track progress effortlessly.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors">
            <div className="text-purple-400 text-3xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
            <p className="text-gray-400">
              Work together seamlessly. Assign tasks, track progress, and communicate effectively.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors">
            <div className="text-purple-400 text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-2">Project Management</h3>
            <p className="text-gray-400">
              Organize projects, set deadlines, and manage your workflow with powerful tools.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

