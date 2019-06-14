import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LABEL_LANGUAGE', {schema: 'dbo' } )
export class T_LABEL_LANGUAGE {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'LAN_IDENTITY_N',
        })
    public LAN_IDENTITY_N: number;

    @Column('char', {
        nullable: true,
        name: 'LAN_STORELANG_C',
        })
    public LAN_STORELANG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LAN_LABELLANG_C',
        })
    public LAN_LABELLANG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LAN_LABELPRIORITY_C',
        })
    public LAN_LABELPRIORITY_C: string | null;

}
