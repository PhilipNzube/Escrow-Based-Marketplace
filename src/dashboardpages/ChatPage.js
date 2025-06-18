import React, { useState, useRef, useEffect } from "react";
import {
    Avatar,
    Badge,
    Box,
    Divider,
    IconButton,
    InputBase,
    List,
    Popover,
    TextField,
    Typography,
    Slide,
    Paper,
    useTheme,
    useMediaQuery,
    Drawer,
} from "@mui/material";
import {
    EmojiEmotions,
    AttachFile,
    Send,
    InsertDriveFile,
    Image,
    VideoLibrary,
    LocationOn,
    Person,
    Menu as MenuIcon,
} from "@mui/icons-material";
import ChatListItem from "../components/ChatListItem";
import ChatBubble from "../components/ChatBubble";
import Tooltip from '@mui/material/Tooltip';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EmojiPicker from "emoji-picker-react";
import ClickAwayListener from '@mui/material/ClickAwayListener';

const dummyChats = [
    {
        id: 1,
        name: "Alice",
        message: "Hey! How are you doing today?",
        time: "10:45 AM",
        online: true,
        avatar: "https://i.pravatar.cc/150?img=1",
        chat: [
            { from: "Alice", text: "Hey!", time: "10:40 AM" },
            { from: "me", text: "Hi! I'm good. You?", time: "10:41 AM" },
        ],
    },
    {
        id: 2,
        name: "Bob",
        message: "Let’s catch up tomorrow",
        time: "9:30 AM",
        online: false,
        avatar: "https://i.pravatar.cc/150?img=2",
        chat: [
            { from: "Bob", text: "Let’s catch up tomorrow", time: "9:30 AM" },
        ],
    },
    {
        id: 1,
        name: "Alice",
        message: "Hey! How are you doing today?",
        time: "10:45 AM",
        online: true,
        avatar: "https://i.pravatar.cc/150?img=1",
        chat: [
            { from: "Alice", text: "Hey!", time: "10:40 AM" },
            { from: "me", text: "Hi! I'm good. You?", time: "10:41 AM" },
        ],
    },
    {
        id: 2,
        name: "Bob",
        message: "Let’s catch up tomorrow",
        time: "9:30 AM",
        online: false,
        avatar: "https://i.pravatar.cc/150?img=2",
        chat: [
            { from: "Bob", text: "Let’s catch up tomorrow", time: "9:30 AM" },
        ],
    },
    {
        id: 1,
        name: "Alice",
        message: "Hey! How are you doing today?",
        time: "10:45 AM",
        online: true,
        avatar: "https://i.pravatar.cc/150?img=1",
        chat: [
            { from: "Alice", text: "Hey!", time: "10:40 AM" },
            { from: "me", text: "Hi! I'm good. You?", time: "10:41 AM" },
        ],
    },
    {
        id: 2,
        name: "Bob",
        message: "Let’s catch up tomorrow",
        time: "9:30 AM",
        online: false,
        avatar: "https://i.pravatar.cc/150?img=2",
        chat: [
            { from: "Bob", text: "Let’s catch up tomorrow", time: "9:30 AM" },
        ],
    },
];

export default function ChatPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [mobileOpen, setMobileOpen] = useState(true);
    const [selectedChat, setSelectedChat] = useState(dummyChats[0]);
    const [newMessage, setNewMessage] = useState("");
    const [emojiAnchorEl, setEmojiAnchorEl] = useState(null);
    const [showAttachOptions, setShowAttachOptions] = useState(false);
    const hasClosedRightForMobile = useRef(false);


    useEffect(() => {
        if (isMobile && !hasClosedRightForMobile.current) {
            setMobileOpen(false);
            hasClosedRightForMobile.current = true; // prevent it from running again
        }
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile) {
            setMobileOpen(true);
            hasClosedRightForMobile.current = false;
        }
    }, [isMobile]);

    const handleSendMessage = () => {
        if (newMessage.trim() === "") return;
        const newChat = {
            from: "me",
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setSelectedChat((prev) => ({ ...prev, chat: [...prev.chat, newChat] }));
        setNewMessage("");
    };

    const handleEmojiClick = (event) => setEmojiAnchorEl(event.currentTarget);
    const handleCloseEmoji = () => setEmojiAnchorEl(null);
    const handleEmojiSelect = (emojiData) => setNewMessage((prev) => prev + emojiData.emoji);
    const toggleAttachOptions = () => setShowAttachOptions((prev) => !prev);

    const handleFileInput = (accept, capture = null) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = accept;
        if (capture) input.capture = capture;
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) alert(`Selected file: ${file.name}`);
        };
        input.click();
    };

    const handleClickAway = () => {
        setShowAttachOptions(false);
    };

    const attachActions = [
        { icon: <InsertDriveFile />, label: "Document", onClick: () => handleFileInput('.pdf,.doc,.docx,.txt') },
        { icon: <Image />, label: "Image", onClick: () => handleFileInput('image/*', 'environment') },
        { icon: <VideoLibrary />, label: "Video", onClick: () => handleFileInput('video/*') },
        { icon: <LocationOn />, label: "Location", onClick: () => alert("Location sharing not supported yet.") },
        { icon: <Person />, label: "Contact", onClick: () => alert("Contact upload not implemented.") },
    ];

    return (
        <Box sx={{
            mt: 2,
            px: 2,
            width: '100%',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
        }}>
            <Box
                sx={{
                    mt: 3,
                    width: '100%',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}>
                {/* {isMobile && ( */}
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <Tooltip title="Recent Chats">
                        <IconButton
                            onClick={() => setMobileOpen(true)}
                            sx={{
                                animation: 'pulse 2s infinite',
                                borderRadius: '50%',
                                position: 'relative',
                                color: 'inherit',
                                '&:hover': {
                                    animation: 'none', // Stop pulsing on hover if you want
                                },
                                '@keyframes pulse': {
                                    '0%': {
                                        boxShadow: '0 0 0 0 rgba(25, 118, 210, 0.4)',
                                    },
                                    '70%': {
                                        boxShadow: '0 0 0 10px rgba(25, 118, 210, 0)',
                                    },
                                    '100%': {
                                        boxShadow: '0 0 0 0 rgba(25, 118, 210, 0)',
                                    },
                                },
                            }}
                        >
                            <Badge color="secondary" variant="dot" overlap="circular">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </Box>
                {/* )} */}
                <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ color: "#000" }}>
                    Messages
                </Typography>
            </Box>
            <Box
                sx={{
                    mt: 3,
                    width: '100%',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}>
                {/* Responsive Sidebar */}
                {/* {isMobile ? ( */}
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen} onClose={() => setMobileOpen(false)}>
                    <Box width={250} p={2}>
                        <Typography
                            variant="body1"
                            fontWeight={600}>
                            Recent Chats
                        </Typography>
                        <Divider sx={{ my: 1 }} />
                        <TextField variant="outlined" placeholder="Search..." size="small" fullWidth />
                        <List>
                            {dummyChats.map((chat) => (
                                <ChatListItem
                                    key={chat.id}
                                    chat={chat}
                                    onClick={() => {
                                        setSelectedChat(chat);
                                        setMobileOpen(false);
                                    }}
                                />
                            ))}
                        </List>
                    </Box>
                </Drawer>
                {/*  ) : (
                //     <Box
                //         width={{ sm: "30%", md: "25%" }}
                //         borderRight="1px solid #ccc"
                //         display="flex"
                //         flexDirection="column"
                //         sx={{ maxHeight: "100vh", overflowY: "auto" }}
                //     >
                //         <Box p={2}>
                //             <Typography variant="body1" fontWeight={600}>Recent Chats</Typography>
                //             <Divider />
                //         </Box>
                //         <Box px={2}>
                //             <TextField variant="outlined" placeholder="Search..." size="small" fullWidth />
                //         </Box>
                //         <Box flex={1}>
                //             <List>
                //                 {dummyChats.map((chat) => (
                //                     <ChatListItem key={chat.id} chat={chat} onClick={() => setSelectedChat(chat)} />
                //                 ))}
                //             </List>
                //         </Box>
                //     </Box>
                // )} */}

                {/* Chat Main */}
                <Box flex={1} display="flex" flexDirection="column">
                    <Box
                        p={2}
                        display="flex"
                        alignItems="center"
                        borderBottom="1px solid #ccc"
                        sx={{
                            position: "sticky",
                            top: -20,
                            backgroundColor: "#f0f0f0",
                            zIndex: 10,
                        }}
                    >
                        <Badge
                            color="success"
                            variant={selectedChat.online ? "dot" : "standard"}
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        >
                            <Avatar src={selectedChat.avatar} sx={{ mr: 2 }} />
                        </Badge>
                        <Box>
                            <Typography variant="subtitle1">{selectedChat.name}</Typography>
                            <Typography variant="caption" color="textSecondary">
                                {selectedChat.online ? "Online" : `Last seen: ${selectedChat.time}`}
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        flex={1}
                        sx={{
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            width: "auto",
                            p: 2,

                            mb: 8, // to prevent overlap with the input bar
                        }}
                    >
                        {selectedChat.chat.map((msg, index) => (
                            <ChatBubble key={index} msg={msg} />
                        ))}
                    </Box>

                    <Box
                        sx={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: "100%",
                            zIndex: 100,
                            backgroundColor: "#f0f0f0",
                            py: 1.5,
                            px: 2,
                            borderTop: "1px solid #ccc",
                        }}
                    >
                        <Slide
                            direction="up"
                            in={showAttachOptions}
                            mountOnEnter
                            unmountOnExit
                        >
                            <Paper
                                elevation={3}
                                sx={{
                                    position: "absolute",
                                    bottom: 70,
                                    ...(isMobile
                                        ? { left: "50%", transform: "translateX(-50%)", maxWidth: "90vw" }
                                        : { right: 40 }),
                                    background: "white",
                                    borderRadius: 2,
                                    p: 1,
                                    display: "flex",
                                    gap: 2,
                                    flexWrap: "wrap",
                                    zIndex: 101,
                                }}
                            >
                                <ClickAwayListener onClickAway={handleClickAway}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 2,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {attachActions.map((action, index) => (
                                            <Box
                                                key={index}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    action.onClick();
                                                }}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    cursor: "pointer",
                                                    width: 80,
                                                    m: 1,
                                                }}
                                            >
                                                <IconButton color="primary">{action.icon}</IconButton>
                                                <Typography variant="caption">{action.label}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </ClickAwayListener>
                            </Paper>
                        </Slide>

                        {/* Centered Message Bar */}
                        <Box
                            sx={{
                                mx: "auto",
                                width: "100%",
                                backgroundColor: "white",
                                borderRadius: "30px",
                                px: 2,
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <InputBase
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Type a message"
                                sx={{ flexGrow: 1 }}
                            />
                            <IconButton onClick={handleEmojiClick}>
                                <EmojiEmotions />
                            </IconButton>
                            <Popover
                                open={Boolean(emojiAnchorEl)}
                                anchorEl={emojiAnchorEl}
                                onClose={handleCloseEmoji}
                                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                                transformOrigin={{ vertical: "bottom", horizontal: "left" }}
                            >
                                <EmojiPicker onEmojiClick={handleEmojiSelect} height={350} width={300} />
                            </Popover>
                            <IconButton onClick={toggleAttachOptions}>
                                <AttachFile />
                            </IconButton>
                            <IconButton color="primary" onClick={handleSendMessage}>
                                <Send />
                            </IconButton>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box >
    );
}
