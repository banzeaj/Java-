
import java.util.NoSuchElementException;

// Node class representing each song in the linked list
class SongNode {
    String song;
    SongNode next;

    SongNode(String song) {
        this.song = song;
        this.next = null;
    }
}

// Linked list class for the playlist
class Playlist {
    private SongNode head;
    private SongNode tail;
    private SongNode current;

    public Playlist() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    // Add a new song to the playlist
    public void addSong(String song) {
        SongNode newNode = new SongNode(song);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    // Remove a song from the playlist
    public void removeSong(String song) {
        if (head == null) {
            throw new NoSuchElementException("The playlist is empty.");
        }

        if (head.song.equals(song)) {
            head = head.next;
            return;
        }

        SongNode current = head;
        while (current.next != null && !current.next.song.equals(song)) {
            current = current.next;
        }

        if (current.next == null) {
            throw new NoSuchElementException("Song not found in the playlist.");
        }

        current.next = current.next.next;
        if (current.next == null) {
            tail = current;
        }
    }

    // Navigate through the playlist by playing songs in the order they were added
    public String playNext() {
        if (current == null) {
            current = head;
        } else {
            current = current.next;
        }

        if (current == null) {
            throw new NoSuchElementException("End of playlist reached.");
        }

        return current.song;
    }

    // Print the playlist
    public void printPlaylist() {
        SongNode current = head;
        while (current != null) {
            System.out.print(current.song + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}

// Test scenario
public class Main {
    public static void main(String[] args) {
        Playlist playlist = new Playlist();

        // Adding songs to the playlist
        playlist.addSong("Song 1");
        playlist.addSong("Song 2");
        playlist.addSong("Song 3");
        playlist.addSong("Song 4");
        System.out.println("Playlist after adding songs:");
        playlist.printPlaylist();

        // Removing a song from the playlist
        playlist.removeSong("Song 2");
        System.out.println("Playlist after removing 'Song 2':");
        playlist.printPlaylist();

        // Playing songs in the playlist
        System.out.println("Playing songs:");
        try {
            while (true) {
                System.out.println("Playing: " + playlist.playNext());
            }
        } catch (NoSuchElementException e) {
            System.out.println(e.getMessage());
        }
    }
}
