import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ADJUSTMENT', {schema: 'dbo' } )
@Index('IX_ADJUSTMENT_APPL', ['ADJ_APPLICATIONDATE_DAT', 'ADJ_TREATEDDATE_DAT', 'ADJ_IDNUMBER_C', 'ADJ_CREATIONDATE_DAT'])
@Index('IX_IDNUMBER', ['ADJ_IDNUMBER_C'])
export class T_ADJUSTMENT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'ADJ_IDENTITY_D',
        })
    public ADJ_IDENTITY_D: number;

    @Column('datetime', {
        nullable: false,
        name: 'ADJ_APPLICATIONDATE_DAT',
        })
    public ADJ_APPLICATIONDATE_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'ADJ_TREATEDDATE_DAT',
        })
    public ADJ_TREATEDDATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'ADJ_IDNUMBER_C',
        })
    public ADJ_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'ADJ_CREATIONDATE_DAT',
        })
    public ADJ_CREATIONDATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ADJ_USERID_C',
        })
    public ADJ_USERID_C: string | null;

}
