import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FALCONFOLDERS', {schema: 'dbo' } )
export class T_FALCONFOLDERS {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'TFF_FALCONFOLDERSID_N',
        })
    public TFF_FALCONFOLDERSID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 260,
        name: 'TFF_FLASH_C',
        })
    public TFF_FLASH_C: string;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'TFF_COMMENT_C',
        })
    public TFF_COMMENT_C: string | null;

}
