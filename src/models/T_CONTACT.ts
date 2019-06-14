import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CONTACT', {schema: 'dbo' } )
export class T_CONTACT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'TEL_CONTACTID_N',
        })
    public TEL_CONTACTID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TEL_FIRSTNAME_C',
        })
    public TEL_FIRSTNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TEL_LASTNAME_C',
        })
    public TEL_LASTNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TEL_SERVICE_C',
        })
    public TEL_SERVICE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'TEL_TELNUMMER_C',
        })
    public TEL_TELNUMMER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'TEL_FAXNUMMER_C',
        })
    public TEL_FAXNUMMER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 60,
        name: 'TEL_COMMENT_C',
        })
    public TEL_COMMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TEL_Flagdelete_c',
        })
    public TEL_Flagdelete_c: string | null;

}
