"use client";
import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Search, User, Bell, Menu, X, Bookmark, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Define interfaces for data structures
interface Author {
    name: string;
    role: string;
    avatar: string;
    isVerified?: boolean;
}

interface Reply {
    id: number;
    content: string;
    author: Author;
    timestamp: string;
    likes: number;
}

interface Question {
    id: number;
    title: string;
    content: string;
    author: Author;
    timestamp: string;
    likes: number;
    replies: Reply[];
    tags: string[];
    isBookmarked: boolean;
    views: number;
}

interface Notification {
    id: number;
    type: 'reply' | 'like' | 'mention';
    text: string;
    time: string;
    read: boolean;
}

interface NewQuestion {
    title: string;
    content: string;
    tags: string[];
}

// Props interface for QuestionCard component
interface QuestionCardProps {
    question: Question;
}

const CommunityForum: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([
        {
            id: 1,
            title: "How long does shipping take to Delhi?",
            content: "I'm planning to order multiple items. What's the estimated delivery time to Delhi?",
            author: {
                name: "Priya S.",
                role: "customer",
                avatar: "/user1.png",
                isVerified: false
            },
            timestamp: "2 hours ago",
            likes: 5,
            replies: [
                {
                    id: 101,
                    content: "Hi Priya, typically shipping to Delhi takes 2-3 business days. For multiple items, they will be consolidated and shipped together.",
                    author: {
                        name: "Raj K.",
                        role: "seller",
                        isVerified: true,
                        avatar: "/user2.png"
                    },
                    timestamp: "1 hour ago",
                    likes: 3
                }
            ],
            tags: ["shipping", "delivery"],
            isBookmarked: false,
            views: 124
        },
        {
            id: 2,
            title: "Product warranty question",
            content: "Does the premium membership include extended warranty? I'm considering upgrading my account.",
            author: {
                name: "Arun M.",
                role: "customer",
                avatar: "/user3.png",
            },
            timestamp: "5 hours ago",
            likes: 3,
            replies: [],
            tags: ["warranty", "membership"],
            isBookmarked: true,
            views: 89
        },
        {
            id: 3,
            title: "Bulk order discount inquiry",
            content: "We're looking to place a large corporate order. What are your bulk pricing policies?",
            author: {
                name: "Vikram P.",
                role: "business",
                avatar: "/user3.png",
            },
            timestamp: "1 day ago",
            likes: 8,
            replies: [
                {
                    id: 102,
                    content: "Hello Vikram, for corporate orders above ₹50,000, we offer special pricing. Please contact our business team.",
                    author: {
                        name: "Anita R.",
                        role: "admin",
                        isVerified: true,
                        avatar: "/user1.png"
                    },
                    timestamp: "20 hours ago",
                    likes: 4
                }
            ],
            tags: ["business", "pricing"],
            isBookmarked: false,
            views: 256
        }
    ]);

    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: 1,
            type: "reply",
            text: "Your question received a new answer",
            time: "5m ago",
            read: false
        },
        {
            id: 2,
            type: "like",
            text: "A seller responded to your query",
            time: "1h ago",
            read: false
        },
        {
            id: 3,
            type: "mention",
            text: "Your answer was marked as helpful",
            time: "2h ago",
            read: true
        }
    ]);

    const [newQuestion, setNewQuestion] = useState<NewQuestion>({
        title: '',
        content: '',
        tags: []
    });

    const [filter, setFilter] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showNotifications, setShowNotifications] = useState<boolean>(false);
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const handleQuestionSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            const newQuestionObj: Question = {
                id: questions.length + 1,
                title: newQuestion.title,
                content: newQuestion.content,
                tags: newQuestion.tags,
                author: {
                    name: "Current User",
                    role: "customer",
                    avatar: "/user2.png"
                },
                timestamp: "Just now",
                likes: 0,
                replies: [],
                views: 0,
                isBookmarked: false
            };

            setQuestions([newQuestionObj, ...questions]);
            setNewQuestion({ title: '', content: '', tags: [] });
            setShowQuestionModal(false);
            setLoading(false);
            setNotifications([...notifications])
        }, 1000);
    };

    const handleLikeQuestion = (questionId: number): void => {
        setQuestions(questions.map(q => {
            if (q.id === questionId) {
                return { ...q, likes: q.likes + 1 };
            }
            return q;
        }));
    };

    const handleBookmark = (questionId: number): void => {
        setQuestions(questions.map(q => {
            if (q.id === questionId) {
                return { ...q, isBookmarked: !q.isBookmarked };
            }
            return q;
        }));
    };

    const handleReply = (questionId: number, replyContent: string): void => {
        if (!replyContent.trim()) return;

        setQuestions(questions.map(q => {
            if (q.id === questionId) {
                const newReply: Reply = {
                    id: Date.now(),
                    content: replyContent,
                    author: {
                        name: "Current User",
                        role: "customer",
                        avatar: "/api/placeholder/32/32"
                    },
                    timestamp: "Just now",
                    likes: 0
                };
                return { ...q, replies: [...q.replies, newReply] };
            }
            return q;
        }));
    };

    const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
        const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
        const [replyContent, setReplyContent] = useState<string>('');

        return (
            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-lg shadow-md p-6"
            >
                {/* Question Header */}
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src={question.author.avatar}
                            alt={question.author.name}
                            width={800}
                            height={800}
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-[#8b4513]">{question.author.name}</span>
                                <span className="text-sm px-2 py-1 rounded-full bg-[#f1e3d1] text-[#8b4513]">
                                    {question.author.role}
                                </span>
                            </div>
                            <span className="text-sm text-gray-500">{question.timestamp}</span>
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleBookmark(question.id)}
                        className={`p-2 rounded-full ${question.isBookmarked ? 'text-[#8b4513]' : 'text-gray-400'}`}
                    >
                        <Bookmark size={20} />
                    </motion.button>
                </div>

                {/* Question Content */}
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-[#8b4513] mb-2">{question.title}</h3>
                    <p className="text-gray-700">{question.content}</p>
                </div>
                {/* Tags */}
                <div className="flex gap-2 mt-4">
                    {question.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-[#f1e3d1] text-[#8b4513] text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                 {/* Question Stats */}
                        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleLikeQuestion(question.id)}
                            className="flex items-center gap-1 text-gray-500 hover:text-[#8b4513]"
                          >
                            <ThumbsUp size={18} />
                            <span>{question.likes}</span>
                          </motion.button>
                          <button
                            onClick={() => setShowReplyBox(!showReplyBox)}
                            className="flex items-center gap-1 text-gray-500 hover:text-[#8b4513]"
                          >
                            <MessageCircle size={18} />
                            <span>{question.replies.length}</span>
                          </button>
                          <div className="flex items-center gap-1 text-gray-500">
                            <User size={18} />
                            <span>{question?.views}</span>
                          </div>
                        </div>
                
                        {/* Replies */}
                        {question.replies.length > 0 && (
                          <div className="mt-6 space-y-4">
                            {question.replies.map((reply) => (
                              <motion.div
                                key={reply.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-[#f1e3d1]/30 rounded-lg p-4 ml-8"
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <Image
                                    src={reply.author.avatar}
                                    width={800}
                                    height={800}
                                    alt={reply.author.name}
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium text-[#8b4513]">{reply.author.name}</span>
                                      {reply.author.isVerified && (
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#8b4513] text-white">
                                          Verified
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-sm text-gray-500">{reply.timestamp}</span>
                                  </div>
                                </div>
                                <p className="text-gray-700">{reply.content}</p>
                              </motion.div>
                            ))}
                          </div>
                        )}
                
                        {/* Reply Box */}
                        <AnimatePresence>
                          {showReplyBox && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4"
                            >
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  value={replyContent}
                                  onChange={(e) => setReplyContent(e.target.value)}
                                  placeholder="Write a reply..."
                                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#8b4513] focus:border-[#8b4513]"
                                />
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => {
                                    handleReply(question.id, replyContent);
                                    setReplyContent('');
                                    setShowReplyBox(false);
                                  }}
                                  className="px-4 py-2 bg-[#8b4513] text-white rounded-lg hover:bg-[#8b4513]/90"
                                >
                                  Reply
                                </motion.button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
              
            </motion.div>
        );
    };

    // Return statement remains the same
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-[#f1e3d1]"
        >
             {/* Header */}
                  <motion.div
                    className="bg-[#8b4513] text-white py-6 px-4 shadow-lg sticky top-0 z-50"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                      <div>
                        <h1 className="text-3xl font-bold">Community Forum</h1>
                        <p className="mt-2 text-[#f1e3d1]">Connect, Ask, Learn</p>
                      </div>
            
                      {/* Desktop Navigation */}
                      <div className="hidden md:flex items-center gap-6">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative"
                          onClick={() => setShowNotifications(!showNotifications)}
                        >
                          <Bell className="h-6 w-6" />
                          {notifications.filter(n => !n.read).length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">
                              {notifications.filter(n => !n.read).length}
                            </span>
                          )}
                        </motion.button>
            
                        {/* User Menu */}
                        <div className="flex items-center gap-2">
                          <Image
                            src="/user1.png"
                            alt="User"
                            width={800}
                            height={800}
                            className="w-8 h-8 rounded-full"
                          />
                          <span>User</span>
                        </div>
                      </div>
            
                      {/* Mobile Menu Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                      >
                        {showMobileMenu ? <X /> : <Menu />}
                      </motion.button>
                    </div>
                  </motion.div>
            
                  {/* Main Content */}
                  <div className="max-w-6xl mx-auto p-4 mt-6">
                    {/* Search and Filters */}
                    {/* Search and Filters */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                        <input
                          type="text"
                          placeholder="Search questions..."
                          className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#8b4513]/20 focus:ring-2 focus:ring-[#8b4513]/40 bg-white"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2">
                        <select
                          className="px-4 py-2 rounded-lg border border-[#8b4513]/20 focus:ring-2 focus:ring-[#8b4513]/40 bg-white"
                          value={filter}
                          onChange={(e) => setFilter(e.target.value)}
                        >
                          <option value="all">All Questions</option>
                          <option value="unanswered">Unanswered</option>
                          <option value="answered">Answered</option>
                          <option value="popular">Most Popular</option>
                        </select>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowQuestionModal(true)}
                          className="bg-[#8b4513] text-white px-4 py-2 rounded-lg hover:bg-[#8b4513]/90"
                        >
                          Ask Question
                        </motion.button>
                      </div>
                    </div>
            
                    {/* Questions List */}
                    <motion.div
                      variants={containerVariants}
                      className="space-y-6"
                    >
                      {questions
                        .filter(q => {
                          if (filter === 'unanswered') return q.replies.length === 0;
                          if (filter === 'answered') return q.replies.length > 0;
                          if (filter === 'popular') return q.likes > 5;
                          return true;
                        })
                        .filter(q => 
                          searchTerm === '' || 
                          q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.content.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((question) => (
                          <QuestionCard key={question.id} question={question} />
                        ))}
                    </motion.div>
            
                    {/* Ask Question Modal */}
                    <AnimatePresence>
                      {showQuestionModal && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                          onClick={() => setShowQuestionModal(false)}
                        >
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-lg p-6 max-w-2xl w-full"
                            onClick={e => e.stopPropagation()}
                          >
                            <div className="flex justify-between items-center mb-6">
                              <h2 className="text-2xl font-bold text-[#8b4513]">Ask a Question</h2>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setShowQuestionModal(false)}
                              >
                                <X className="text-gray-500" />
                              </motion.button>
                            </div>
            
                            <form onSubmit={handleQuestionSubmit} className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Title
                                </label>
                                <input
                                  type="text"
                                  className="w-full px-4 py-2 rounded-lg border border-[#8b4513]/20 focus:ring-2 focus:ring-[#8b4513]/40"
                                  placeholder="What would you like to know?"
                                  value={newQuestion.title}
                                  onChange={(e) => setNewQuestion({...newQuestion, title: e.target.value})}
                                />
                              </div>
            
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Details
                                </label>
                                <textarea
                                  className="w-full px-4 py-2 rounded-lg border border-[#8b4513]/20 focus:ring-2 focus:ring-[#8b4513]/40 h-32"
                                  placeholder="Provide more details about your question..."
                                  value={newQuestion.content}
                                  onChange={(e) => setNewQuestion({...newQuestion, content: e.target.value})}
                                />
                              </div>
            
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Tags
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {['shipping', 'warranty', 'pricing', 'delivery', 'membership'].map((tag) => (
                                    <motion.button
                                      key={tag}
                                      type="button"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={() => {
                                        setNewQuestion(prev => ({
                                          ...prev,
                                          tags: prev.tags.includes(tag)
                                            ? prev.tags.filter(t => t !== tag)
                                            : [...prev.tags, tag]
                                        }));
                                      }}
                                      className={`px-3 py-1 rounded-full text-sm ${
                                        newQuestion.tags.includes(tag)
                                          ? 'bg-[#8b4513] text-white'
                                          : 'bg-[#f1e3d1] text-[#8b4513]'
                                      }`}
                                    >
                                      {tag}
                                    </motion.button>
                                  ))}
                                </div>
                              </div>
            
                              <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-[#8b4513] text-white py-2 rounded-lg hover:bg-[#8b4513]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {loading ? (
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                                  />
                                ) : (
                                  'Post Question'
                                )}
                              </motion.button>
                            </form>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
            
                    {/* Notifications Panel */}
                    <AnimatePresence>
                      {showNotifications && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="fixed top-20 right-4 bg-white rounded-lg shadow-xl w-80 p-4 z-50"
                        >
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-[#8b4513]">Notifications</h3>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setShowNotifications(false)}
                            >
                              <X className="text-gray-500" size={16} />
                            </motion.button>
                          </div>
                          <div className="space-y-2">
                            {notifications.map(notification => (
                              <motion.div
                                key={notification.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`p-2 rounded-lg cursor-pointer ${
                                  notification.read ? 'bg-gray-50' : 'bg-[#f1e3d1]'
                                }`}
                              >
                                <div className="flex items-start gap-2">
                                  {notification.type === 'reply' && <MessageCircle size={16} />}
                                  {notification.type === 'like' && <ThumbsUp size={16} />}
                                  {notification.type === 'mention' && <AlertCircle size={16} />}
                                  <div>
                                    <p className="text-sm text-gray-800">{notification.text}</p>
                                    <span className="text-xs text-gray-500">{notification.time}</span>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
            
                    {/* Floating Action Button - Mobile */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="fixed bottom-8 right-8 bg-[#8b4513] text-white p-4 rounded-full shadow-lg md:hidden"
                      onClick={() => setShowQuestionModal(true)}
                    >
                      <MessageCircle />
                    </motion.button>
                  </div>
            {/* ... Rest of the JSX remains the same ... */}
        </motion.div>
    );
};

export default CommunityForum;